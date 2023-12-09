import languageconfig from "./lang.json";

const I18n =(keyword,lang)=>{
    return languageconfig[lang][keyword];

}
export default I18n;