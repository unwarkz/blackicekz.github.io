#!/usr/bin/env python3
"""
Auto-translate Russian strings in js/i18n.js to English and Kazakh.
Reads the 'ru' object as source of truth, translates each value,
then updates the 'en' and 'kz' objects in the file.
"""

import re
import json
import sys

try:
    from deep_translator import GoogleTranslator
except ImportError:
    print("deep-translator not installed. Run: pip install deep-translator")
    sys.exit(1)


def translate_text(text, target_lang):
    """Translate text, preserving HTML tags."""
    if not text or not text.strip():
        return text

    # Split on HTML tags, translate only text nodes
    parts = re.split(r'(<[^>]+>)', text)
    translated_parts = []
    for part in parts:
        if part.startswith('<') and part.endswith('>'):
            translated_parts.append(part)
        elif part.strip():
            try:
                result = GoogleTranslator(source='ru', target=target_lang).translate(part)
                translated_parts.append(result if result else part)
            except Exception as e:
                print(f"  Warning: translation failed for '{part[:50]}': {e}")
                translated_parts.append(part)
        else:
            translated_parts.append(part)
    return ''.join(translated_parts)


def extract_object_content(js_content, lang_key):
    """Extract the string values from a language object in i18n.js."""
    # Find the language block: ru: { ... }
    pattern = rf'{lang_key}:\s*\{{([^}}]*(?:\{{[^}}]*\}}[^}}]*)*)\}}'
    match = re.search(pattern, js_content, re.DOTALL)
    if not match:
        return None, None
    block = match.group(0)
    inner = match.group(1)

    # Extract key: 'value' pairs
    translations = {}
    kv_pattern = r"'([^']+)':\s*'((?:[^'\\]|\\.)*)'"
    for m in re.finditer(kv_pattern, inner):
        key = m.group(1)
        value = m.group(2).replace("\\'", "'")
        translations[key] = value

    return block, translations


def build_object_str(lang_key, translations):
    """Build the JS object string for a language."""
    lines = [f"    {lang_key}: {{"]
    items = list(translations.items())
    for i, (key, value) in enumerate(items):
        escaped = value.replace("\\", "\\\\").replace("'", "\\'")
        comma = "," if i < len(items) - 1 else ""
        lines.append(f"      '{key}': '{escaped}'{comma}")
    lines.append("    }")
    return "\n".join(lines)


def main():
    filepath = 'js/i18n.js'
    print(f"Reading {filepath}...")

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract Russian source
    _, ru_translations = extract_object_content(content, 'ru')
    if not ru_translations:
        print("ERROR: Could not parse 'ru' object from i18n.js")
        sys.exit(1)

    print(f"Found {len(ru_translations)} Russian strings to translate.")

    # Translate to English and Kazakh
    en_translations = {}
    kz_translations = {}

    for key, value in ru_translations.items():
        print(f"  Translating '{key}'...")
        en_translations[key] = translate_text(value, 'en')
        kz_translations[key] = translate_text(value, 'kk')

    # Replace en and kz blocks in the file
    en_block_match, _ = extract_object_content(content, 'en')
    kz_block_match, _ = extract_object_content(content, 'kz')

    if en_block_match:
        new_en_block = build_object_str('en', en_translations)
        content = content.replace(en_block_match, new_en_block, 1)
    else:
        print("WARNING: Could not find 'en' block to replace.")

    if kz_block_match:
        new_kz_block = build_object_str('kz', kz_translations)
        content = content.replace(kz_block_match, new_kz_block, 1)
    else:
        print("WARNING: Could not find 'kz' block to replace.")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Done. Updated {filepath} with EN and KZ translations.")


if __name__ == '__main__':
    main()
