namespace ActionsModel
{
    public class ActionsClass
    {
        public string Name { get; set; }
        public string Desc { get; set; }
        public OptionsModel.OptionsClass Options { get; set; }
        public DamageModel.DamageClass[] Damage { get; set; }
    }
}