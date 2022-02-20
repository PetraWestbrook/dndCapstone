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
        public proficiencyModel.proficienciesClass[] proficiencies { get; set; }
        public string[] damage_vulnerabilities { get; set; }
        public string[] damage_resistances { get; set; }
        public string[] damage_immunities { get; set; }
        public string[] condition_immunities { get; set; }
        public object senses { get; set; }
        public string languages { get; set; }
        public decimal challenge_rating { get; set; }
        public specialAbilitiesModel.specialAbilitiesClass[] special_abilities { get; set; }
        public ActionsModel.ActionsClass[] actions { get; set; }
        public ActionsModel.ActionsClass[] legendary_actions { get; set; }
        public string url { get; set; }
    }

    class MonsterCall
    {
        static HttpClient client = new HttpClient();
        static string baseAddress = "https://www.dnd5eapi.co/api/";

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
