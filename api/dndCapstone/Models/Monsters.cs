using System;

namespace MonsterApiConnection
{
    public class Monsters
    {
        public string name { get; set; }
        public string size { get; set; }
        public string type { get; set; }
        public string subtype { get; set; }
        public string alignment { get; set; }
        public int armor_class { get; set; }
        public int hit_points { get; set; }
        public string hit_dice { get; set; }
        public commonModel.APIRef[] forms { get; set; }
        public object speed { get; set; }
        public int strength { get; set; }
        public int dexterity { get; set; }
        public int constitution { get; set; }
        public int intelligence { get; set; }
        public int wisdom { get; set; }
        public int charisma { get; set; }
        public proficiencyModel.proficienciesClass[] proficiencies {get;set;}
}

class MonsterCall
{
    static HttpClient client = new HttpClient();
    static string baseAddress = "https://www.dnd5eapi.co/api/";
    static async Task<Uri> CreateMonsterAsync(Monsters monster)
    {
        HttpResponseMessage response = await client.PostAsJsonAsync(
            $"{baseAddress}monsters/aboleth", monster);
        response.EnsureSuccessStatusCode();

        // return URI of the created resource.
        return response.Headers.Location;
    }

    public static async Task<Monsters> GetMonstersAsync(string path)
    {
        Monsters monster = null;
        HttpResponseMessage response = await client.GetAsync($"{baseAddress}monsters/{path}");
        if (response.IsSuccessStatusCode)
        {
            monster = await response.Content.ReadFromJsonAsync<Monsters>();
        }
        return monster;
    }
}
}
