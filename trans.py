from googletrans import Translator
import webvtt


translator = Translator()


def your_translation_function(text):
    return translator.translate(text, src='en', dest='zh-CN').text


def translate_text(text):
    # 这里需要实现与ChatGPT或其他翻译服务的集成
    translated_text = your_translation_function(text)
    return translated_text


def use_webvtt():
    captions = webvtt.read('./vtt/subtitles-en.vtt')
    count = 0

    for caption in captions:
        count = count + 1
        print(caption.text)
        try:
            translated_text = translate_text(caption.text)
        except Exception as e:
            print(f"exception {count}")
        caption.text = translated_text

    with open('./vtt/subtitles-zh-CN.vtt', 'w', encoding='utf-8') as file:
        file.write('WEBVTT\n\n')
        for caption in captions:
            file.write(f"{caption.start} --> {caption.end}\n{caption.text}\n\n")
