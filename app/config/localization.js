// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

export let strings = new LocalizedStrings({
 en:{
   loginGuest: "Login",
   vocabulary : "Vocabulary",
   grammar : "Grammar",
   kanji : "Kanji",
   topic_test : "Topic test",
   next_topic : "Next Topic",
   TOPIC_LIST : "Topic List",
   HIRAGANA_TITLE: "Hiragana & Katakana",
   HIRAGANA_LIST_TITLE: 'Hiragana',
   KATAKANA_LIST_TITLE: 'Katakana',
   NUMBER_TITLE : "Number",
   GREETING_TITLE : "Greeting",
   TOPIC1_TITLE : "Myself",
   TOPIC2_TITLE : "Family",
   TOPIC3_TITLE : "House",
   TOPIC4_TITLE : "Living environments",
   TOPIC5_TITLE : "Free time",
   TOPIC6_TITLE : "Entertainment",
   TOPIC7_TITLE : "Living",
   TOPIC8_TITLE : "Human Life",
   TOPIC9_TITLE : "Travel",
   TOPIC10_TITLE : "Traffic",
   TOPIC11_TITLE : "health",
   TOPIC12_TITLE : "Shopping",
   TOPIC13_TITLE : "Eating habits",
   TOPIC14_TITLE : "Nature",
   TOPIC15_TITLE : "Trouble · Manner",
   TOPIC16_TITLE : "Language and Culture",
   // Question Panel
   QUESTION_SELECT : "Select",
   QUESTION_FILL : "Fill in the blanks",
   QUESTION_ARRANGE : "Arrange the sentence",
   // Quiz
   TIMES_UP: "Time's up",
   WORD_LIST: "WORD LIST",
   EXPLANATION: "EXPLANATION",
   FLASH_CARD: "FLASH CARD",
   DRAW: "DRAW",
   GOI_LIST : "VOCABULARY LIST",
   BUNPO_LIST : "GRAMMAR LIST",
   KANJI_LIST : "KANJI LIST",
   FLASH_CARD_HIRAGANA: "FLASH CARD HIRAGANA",
   FLASH_CARD_KATAKANA: "FLASH CARD KATAKANA",
   HIKA_ROMA: "Hiragana/Katakana to Romaji",
   ROMA_HIKA: "Romaji to Hiragana/Katakana",
   LISTEN: "Listening",
   TRANSLATE_SENTENCE: "Translate the sentence",
   FLASH_CARD: "Listening\n(Translate)",
   FILL_THE_BLANKS: "Fill in the blanks",
   REARRANGE: "Rearrange the sentence",
   ENGLISH: "English",
   NEXT:'Next',
   WORD_LIST_LEARN: "WORD LIST",
   EXPLANATION_LEARN: "EXPLANATION",
   FLASH_CARD_LEARN: "FLASH CARD",
   DRAW_LEARN: "DRAW",
   GOI_LIST_LEARN : "VOCABULARY LIST",
   BUNPO_LIST_LEARN : "GRAMMAR LIST",
   KANJI_LIST_LEARN : "KANJI LIST",
   FLASH_CARD_HIRAGANA_LEARN: "FLASH CARD HIRAGANA",
   FLASH_CARD_KATAKANA_LEARN: "FLASH CARD KATAKANA",
   FUKUSHU1_TITLE : "FUKUSHU TEST",
   FUKUSHU2_TITLE : "FUKUSHU TEST",
   FUKUSHU3_TITLE : "FUKUSHU TEST",
   FUKUSHU4_TITLE : "FUKUSHU TEST",
   SETTING_LANGUAGES : "APLICCATION LANGUAGES",
   SETTING_LANGUAGES_PROFILE : "LANGUAGES SETTINGS",
   HOME_STUDY : "STUDY",
   HOME_SUMMARY : "SUMMARY",
   HOME_PROFILE : "PROFILE",
   HOME_TARGET : "Target Date",
   HOME_LEFT : "d Left",
   HOME_MESSAGE : "Hello! How are you\nLet's Study",
   STUDY_LEARN : "LEARN",
   STUDY_QUIZ : "QUIZ",
   STUDY_TEST : "TEST",
   STUDY_START : "START",
   STUDY_REVIEW : "REVIEW",
   PROFILE_MODAL_CLOSE : "CANCEL",
   TITLE_LEARN : 'LEARN',
   EXPLAINATION_LEARN : 'Explanation card',
   CHECK_ALL : "Check All",
   PROCEED : "Proceed >",
   QUIZLIST : "Quizlist",

  //login part
  SIGN_IN : "Sign In",
  SIGN_IN_USERNAME : "Username",
  SIGN_IN_PASSWORD : "Password",
  SIGN_IN_MESSAGE : "Input your username and password",
  SIGN_IN_VALIDATION_USERNAME : "User name is required",
  SIGN_IN_VALIDATION_PASSWORD : "Password is required",
  SIGN_IN_VALIDATION_FAILED : "Username and password is wrong",

  //profile part
  PROFILE_PERSONAL_DATA : "Personal Data",
  PROFILE_GENDER : "Gender",
  PROFILE_BIRTHDATE : "Birthdate",
  PROFILE_EDUCATION_HISTORY : "Education History",
  PROFILE_LATEST_EDUCATION : "Latest Education",
  PROFILE_SCHOOL_OR_UNIVERSITY : "School or University",
  PROFILE_MAJOR : "Major",
  PROFILE_GRADUATION_YEAR : "Graduation Year",
  PROFILE_ENGLISH_LEVEL : "English Level",
  PROFILE_JAPANESE_STUDY_HISTORY : "Japanese Study History",
  PROFILE_STUDY_PLAN : "Study Plan",
  PROFILE_STUDY_REASON : "Why You want to study Japanese",
  PROFILE_STUDY_DAYS : "Study Days / Week",
  PROFILE_STUDY_HOURS : "Study Hours / Day",
  PROFILE_DESIRED_FINISH_DATE : "Desired Finish Date",
  PROFILE_ACCOUNT : "Account",
  PROFILE_FB_SIGN_IN : "Sign In :",
  PROFILE_SETTING : "Setting",
  PROFILE_LOGOUT : "Logout",
   
  },
 ja: {
   loginGuest: "ログイン",
   vocabulary : "語彙",
   grammar : "文法",
   kanji : "漢字",
   topic_test : "トピックテスト",
   next_topic : "次のトピック",
   TOPIC_LIST : "トピック一覧",   
   HIRAGANA_TITLE: "ひらがなとカタカナ",
   HIRAGANA_LIST_TITLE: 'ひらがな',
   KATAKANA_LIST_TITLE: 'カタカナ',
   NUMBER_TITLE : "数字",
   GREETING_TITLE : "あいさつ",
   TOPIC1_TITLE : "自分",
   TOPIC2_TITLE : "家族",
   TOPIC3_TITLE : "住まい",
   TOPIC4_TITLE : "住環境",
   TOPIC5_TITLE : "自由時間",
   TOPIC6_TITLE : "娯楽",
   TOPIC7_TITLE : "生活",
   TOPIC8_TITLE : "人生",
   TOPIC9_TITLE : "旅行",
   TOPIC10_TITLE : "交通",
   TOPIC11_TITLE : "健康",
   TOPIC12_TITLE : "買い物",
   TOPIC13_TITLE : "食生活 ",
   TOPIC14_TITLE : "自然",
   TOPIC15_TITLE : "トラブル・マナー",
   TOPIC16_TITLE : "言語と文化",
   // Question Panel
   QUESTION_SELECT : "選ぶ",
   QUESTION_FILL : "Fill in the blanks",
   QUESTION_ARRANGE : "Arrange the sentence",
   // Quiz
   TIMES_UP: "時間です",
   WORD_LIST: "言葉一覧",
   EXPLANATION: "説明",
   FLASH_CARD: "フラッシュカード",
   DRAW: "ドロー",
   GOI_LIST : "語彙一覧",
   BUNPO_LIST : "文法一覧",
   KANJI_LIST : "漢字一覧",   
   FLASH_CARD_HIRAGANA: "フラッシュカードひらがな",
   FLASH_CARD_KATAKANA: "フラッシュカードカタカナ",
   HIKA_ROMA: "ひらがな/カタカナからロマジ",
   ROMA_HIKA: "ロマジからひらがな/カタカナ",
   LISTEN: "聴取",
   TRANSLATE_SENTENCE: "Translate the sentence",
   FLASH_CARD: "Listening\n(Translate)",
   FILL_THE_BLANKS: "Fill in the blanks",
   REARRANGE: "Rearrange the sentence",
   ENGLISH: "英語",
   NEXT:'次',
   WORD_LIST_LEARN: "言葉一覧",
   EXPLANATION_LEARN: "説明",
   FLASH_CARD_LEARN: "フラッシュカード",
   DRAW_LEARN: "ドロー",
   GOI_LIST_LEARN : "語彙一覧",
   BUNPO_LIST_LEARN : "文法一覧",
   KANJI_LIST_LEARN : "漢字一覧",
   FLASH_CARD_HIRAGANA_LEARN: "フラッシュカードひらがな",
   FLASH_CARD_KATAKANA_LEARN: "フラッシュカードカタカナ",
   FUKUSHU1_TITLE : "復習テスト",
   FUKUSHU2_TITLE : "復習テスト",
   FUKUSHU3_TITLE : "復習テスト",
   FUKUSHU4_TITLE : "復習テスト",
   SETTING_LANGUAGES : "アプリの語",
   SETTING_LANGUAGES_PROFILE : "語の設定",
   HOME_STUDY : "勉強",
   HOME_SUMMARY : "概要",
   HOME_PROFILE : "プロフィール",   
   HOME_TARGET : "制限時間",
   HOME_LEFT : "日残り",
   HOME_MESSAGE : "こんにちは！お元気ですか？\n勉強しましょう！",
   STUDY_LEARN : "学ぶ",
   STUDY_QUIZ : "クイズ",
   STUDY_TEST : "テスト",
   STUDY_START : "スタート",
   STUDY_REVIEW : "レビュー",
   PROFILE_MODAL_CLOSE : "キャンセル",
   TITLE_LEARN : '学ぶ',
   EXPLAINATION_LEARN : '説明カード',  
   CHECK_ALL : "すべてチェック",
   PROCEED : "持続する >",
   QUIZLIST : "クイズリスト",
 
   
    //login part
  SIGN_IN : "サインイン",
  SIGN_IN_USERNAME : "ユーザー名",
  SIGN_IN_PASSWORD : "パスワード",
  SIGN_IN_MESSAGE : "ユーザー名とパスワードを入力してください",
  SIGN_IN_VALIDATION_USERNAME : "ユーザー名が必須です",
  SIGN_IN_VALIDATION_PASSWORD : "パスワードが必須です",
  SIGN_IN_VALIDATION_FAILED : "ユーザー名とパスワードが間違った",
  

  //profile part
  PROFILE_PERSONAL_DATA : "個人データ",
  PROFILE_GENDER : "性別",
  PROFILE_BIRTHDATE : "誕生日",
  PROFILE_EDUCATION_HISTORY : "教育の歴史",
  PROFILE_LATEST_EDUCATION : "最新の教育",
  PROFILE_SCHOOL_OR_UNIVERSITY : "学校または大学",
  PROFILE_MAJOR : "専門",
  PROFILE_GRADUATION_YEAR : "卒業年",
  PROFILE_ENGLISH_LEVEL : "英語のレベル",
  PROFILE_JAPANESE_STUDY_HISTORY : "日本語教育の歴史",
  PROFILE_STUDY_PLAN : "勉強計画",
  PROFILE_STUDY_REASON : "なぜ日本語を勉強したいですか？",
  PROFILE_STUDY_DAYS : "勉強日/週",
  PROFILE_STUDY_HOURS : "勉強時間/日",
  PROFILE_DESIRED_FINISH_DATE : "勉強の終了日",
  PROFILE_ACCOUNT : "アカウント",
  PROFILE_FB_SIGN_IN : "サインイン :",
  PROFILE_SETTING : "設定",
  PROFILE_LOGOUT : "ログアウト"

  }
});