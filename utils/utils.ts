import format from "date-fns/format";

export const getBaseUrlFromEnviroment = () => {
    let base_url = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://example.com"; 
    // https://v2ds.netlify.app
    return base_url;
};
export default function getFormattedDate(dateString: string): string {
  //console.log({dateString})
  //return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateString))
  return format(new Date(dateString), 'yyyy-MM-dd')
}