const defaultDataset = {
    "init": {
        answers: [
            {content: "ポートフォリオを見たい", nextId: "portfolio"},
            {content: "仕事を依頼したい", nextId: "work"},
            {content: "自己紹介してほしい", nextId: "introduction"},
            {content: "連絡先を知りたい", nextId: "twitter"}
        ],
        question: "こんにちは！ハセと申します！ご用件はなんでしょうか？"
    },
    "portfolio": {
        answers: [
            {content: "ポートフォリオ", nextId: "https://tennis-revolutionblog.com/Kota/"},
            {content: "GitHub", nextId: "https://github.com/Ponta3650"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "ご覧になるサイトを選んでください"
    },
    "work": {
        answers: [
            {content: "Webサイト制作", nextId: "website"},
            {content: "Webアプリ開発", nextId: "webapp"},
            {content: "その他", nextId: "other_jobs"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "どの仕事をご依頼でしょうか？"
    },
    "website": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webサイト制作ですね。コチラからお問い合わせ願います。"
    },
    "webapp": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webアプリ開発ですね。コチラからお問い合わせ願います。"
    },
    "other_jobs": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "その他についてですね。コチラからお問い合わせ願います。"
    },
    "introduction": {
        answers: [
            {content: "どういう性格？", nextId: "human"},
            {content: "趣味は？", nextId: "hobby"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "現在２１歳の大学３年生です！物理学を専攻しております。"
    },
    "human": {
        answers: [
            {content: "趣味は？", nextId: "hobbies"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "一言で言うと、温厚な性格です。"
    },
    "hobby": {
        answers: [
            {content: "どういう性格？", nextId: "humans"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "テニス、ゲーム、スポーツ観戦、アニメなどです！"
    },
    "humans": {
        answers: [
            {content: "連絡先を知りたい", nextId: "twitter"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "一言で言うと、温厚な性格です。"
    },
    "hobbies": {
        answers: [
            {content: "連絡先を知りたい", nextId: "twitter"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "テニス、ゲーム、スポーツ観戦、アニメなどです！"
    },
    "twitter": {
        answers: [
            {content: "Twitterアカウントを見に行く", nextId: "https://twitter.com/ponta410422_"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Twitterアカウントを教えます😘"
    }
}

export default defaultDataset;