namespace MonsterApiConnection
{
    public class Monsters
    {
        public int Count { get; set; }
        public commonModel.APIRef[] Results { get; set; }
    }
    class MonstersCall
    {
        static HttpClient client = new HttpClient();
        static string baseAddress = "https://www.dnd5eapi.co/api/";

    public static async Task<Monsters> GetMonsterListAsync()
        {
            Monsters monster = null;
            HttpResponseMessage response = await client.GetAsync($"{baseAddress}monsters/");
            if (response.IsSuccessStatusCode)
            {
                monster = await response.Content.ReadFromJsonAsync<Monsters>();
            }
            return monster;
        }
    }
}
