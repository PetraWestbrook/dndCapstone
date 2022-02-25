namespace MonsterApiConnection
{
    public class Monster
    {
        public string Name { get; set; }
        public string Size { get; set; }
        public string Type { get; set; }
        public string Subtype { get; set; }
        public string Alignment { get; set; }
        public int Armor_Class { get; set; }
        public int Hit_Points { get; set; }
        public string Hit_Dice { get; set; }
        public commonModel.APIRef[] Forms { get; set; }
        public object Speed { get; set; }
        public int Strength { get; set; }
        public int Dexterity { get; set; }
        public int Constitution { get; set; }
        public int Intelligence { get; set; }
        public int Wisdom { get; set; }
        public int Charisma { get; set; }
        public proficiencyModel.proficienciesClass[] Proficiencies { get; set; }
        public string[] Damage_Vulnerabilities { get; set; }
        public string[] Damage_Resistances { get; set; }
        public string[] Damage_Immunities { get; set; }
        public string[] Condition_Immunities { get; set; }
        public object Senses { get; set; }
        public string Languages { get; set; }
        public decimal Challenge_Rating { get; set; }
        public specialAbilitiesModel.specialAbilitiesClass[] Special_Abilities { get; set; }
        public ActionsModel.ActionsClass[] Actions { get; set; }
        public ActionsModel.ActionsClass[] Legendary_Actions { get; set; }
        public string Url { get; set; }
    }

    class MonsterCall
    {
        static HttpClient client = new HttpClient();
        static string baseAddress = "https://www.dnd5eapi.co/api/";

        public static async Task<Monster> GetMonsterByNameAsync(string path)
        {
            Monster monster = null;
            HttpResponseMessage response = await client.GetAsync($"{baseAddress}monsters/{path}");
            Console.WriteLine(response);
            if (response.IsSuccessStatusCode)
            {
                monster = await response.Content.ReadFromJsonAsync<Monster>();
            }
            return monster;
        }
    }
}
