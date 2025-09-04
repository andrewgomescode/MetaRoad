import { BookOpen, Users, Zap, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          MetaRoad
        </h1>
        <p className="text-xl text-grey-30 max-w-2xl mx-auto">
          O melhor destino para guias, builds e ferramentas para MapleStory
          Classic e outros MMORPGs
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-dark-2 border border-dark-5 rounded-lg p-6 text-center">
          <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">150+</div>
          <div className="text-grey-30">Guias</div>
        </div>
        <div className="bg-dark-2 border border-dark-5 rounded-lg p-6 text-center">
          <Users className="w-8 h-8 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">300+</div>
          <div className="text-grey-30">Builds</div>
        </div>
        <div className="bg-dark-2 border border-dark-5 rounded-lg p-6 text-center">
          <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">50+</div>
          <div className="text-grey-30">Ferramentas</div>
        </div>
        <div className="bg-dark-2 border border-dark-5 rounded-lg p-6 text-center">
          <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">10k+</div>
          <div className="text-grey-30">Usuários</div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Conteúdo em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Guide Card */}
          <div className="bg-dark-2 border border-dark-5 rounded-lg overflow-hidden hover:border-primary transition-colors">
            <div className="h-48 bg-gradient-to-br from-primary to-blue-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Guia Completo: Warrior
              </h3>
              <p className="text-grey-30 mb-4">
                Aprenda tudo sobre a classe Warrior no MapleStory Classic
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-grey-50">Nível 1-200</span>
                <span className="text-sm text-primary">Iniciante</span>
              </div>
            </div>
          </div>

          {/* Build Card */}
          <div className="bg-dark-2 border border-dark-5 rounded-lg overflow-hidden hover:border-primary transition-colors">
            <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Build DPS: Bowmaster
              </h3>
              <p className="text-grey-30 mb-4">
                Build focada em dano máximo para end-game
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-grey-50">Nível 120+</span>
                <span className="text-sm text-yellow-400">Avançado</span>
              </div>
            </div>
          </div>

          {/* Tool Card */}
          <div className="bg-dark-2 border border-dark-5 rounded-lg overflow-hidden hover:border-primary transition-colors">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Calculadora de Stats
              </h3>
              <p className="text-grey-30 mb-4">
                Calcule os melhores stats para seu personagem
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-grey-50">Ferramenta</span>
                <span className="text-sm text-primary">Gratuita</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white">Atualizações Recentes</h2>
        <div className="bg-dark-2 border border-dark-5 rounded-lg p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-white font-medium">
                  Nova build para Dark Knight adicionada
                </h4>
                <p className="text-grey-30 text-sm">
                  Build focada em survivability para boss fights
                </p>
                <span className="text-grey-50 text-xs">Há 2 horas</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-white font-medium">
                  Guia de leveling 1-30 atualizado
                </h4>
                <p className="text-grey-30 text-sm">
                  Novas rotas de quest e dicas para iniciantes
                </p>
                <span className="text-grey-50 text-xs">Há 1 dia</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="text-white font-medium">
                  Calculadora de equipamentos lançada
                </h4>
                <p className="text-grey-30 text-sm">
                  Compare diferentes equipamentos e otimize seu setup
                </p>
                <span className="text-grey-50 text-xs">Há 3 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
