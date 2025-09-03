"use client";

import React from "react";

export default function Sidebar() {
  const liveStreams = [
    {
      title: "BLASTCAST - Path of Exile 2",
      viewers: "1.2k",
      streamer: "Zizaran",
      game: "Path of Exile 2",
      isLive: true,
      gameIcon: "⚔️",
    },
    {
      title: "MapleStory Training Guide",
      viewers: "847",
      streamer: "MetaRoad",
      game: "MapleStory",
      isLive: true,
      gameIcon: "🍁",
    },
    {
      title: "Last Epoch Build Guide",
      viewers: "423",
      streamer: "Community",
      game: "Last Epoch",
      isLive: true,
      gameIcon: "⚡",
    },
  ];

  const recentNews = [
    {
      title: "Path of Exile 2: Third Edict Reveal",
      time: "2h atrás",
      category: "Atualização",
      isHot: true,
      icon: "⚔️",
    },
    {
      title: "MapleStory: Novo evento de inverno",
      time: "5h atrás",
      category: "Evento",
      isHot: false,
      icon: "🍁",
    },
    {
      title: "Last Epoch: Balanceamento de classes",
      time: "1d atrás",
      category: "Patch Notes",
      isHot: false,
      icon: "⚡",
    },
  ];

  const upcomingEvents = [
    {
      title: "Tournament Path of Exile 2",
      date: "15 Jan",
      time: "20:00",
      participants: "128 players",
      icon: "⚔️",
    },
    {
      title: "MapleStory Guild Wars",
      date: "18 Jan",
      time: "19:00",
      participants: "64 guilds",
      icon: "🍁",
    },
    {
      title: "Last Epoch Community Event",
      date: "22 Jan",
      time: "18:00",
      participants: "200+ players",
      icon: "⚡",
    },
  ];

  const tools = [
    { name: "Calculadora", icon: "🧮", href: "#calculator" },
    { name: "Build Planner", icon: "📋", href: "#planner" },
    { name: "DPS Simulator", icon: "⚡", href: "#simulator" },
    { name: "Item Database", icon: "🗂️", href: "#database" },
  ];

  return (
    <aside className="space-y-6 animate-fade-in">
      {/* Live Streams */}
      <div className="card-dark p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse-soft"></div>
            AO VIVO
          </div>
        </div>
        
        <div className="space-y-4">
          {liveStreams.map((stream, index) => (
            <div key={index} className="group cursor-pointer card-dark-interactive p-4" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start gap-3">
                <div className="relative">
                  <div className="w-14 h-10 bg-gradient-to-br from-dark-tertiary to-dark-card rounded-lg flex items-center justify-center text-lg border border-dark group-hover:border-dark-hover transition-colors">
                    {stream.gameIcon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full shadow-lg"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-primary line-clamp-2 group-hover:text-blue-400 transition-colors mb-1">
                    {stream.title}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-secondary font-medium">{stream.streamer}</span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-red-400 font-medium">{stream.viewers} viewers</span>
                  </div>
                  <span className="text-xs text-muted">{stream.game}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <a
          href="#streams"
          className="block mt-5 text-center text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
        >
          Ver todas as streams →
        </a>
      </div>

      {/* Recent News */}
      <div className="card-dark p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-xl">📰</span>
            <h3 className="font-bold text-primary">Notícias Recentes</h3>
          </div>
        </div>
        
        <div className="space-y-4">
          {recentNews.map((news, index) => (
            <div key={index} className="group cursor-pointer card-dark-interactive p-4" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start gap-3">
                <div className="text-xl">{news.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-1">
                    <h4 className="text-sm font-semibold text-primary line-clamp-2 group-hover:text-blue-400 transition-colors flex-1">
                      {news.title}
                    </h4>
                    {news.isHot && (
                      <span className="bg-gradient-to-r from-red-600 to-red-500 text-white px-2 py-0.5 rounded-full text-xs font-bold shadow-lg animate-pulse-soft">
                        HOT
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-secondary font-medium">{news.category}</span>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs text-muted">{news.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <a
          href="#news"
          className="block mt-5 text-center text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
        >
          Ver todas as notícias →
        </a>
      </div>

      {/* Upcoming Events */}
      <div className="card-dark p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-xl">📅</span>
            <h3 className="font-bold text-primary">Próximos Eventos</h3>
          </div>
        </div>
        
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="group cursor-pointer card-dark-interactive p-4" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-4">
                <div className="text-center min-w-[3.5rem]">
                  <div className="text-sm font-bold text-blue-400">{event.date}</div>
                  <div className="text-xs text-muted">{event.time}</div>
                </div>
                <div className="text-xl">{event.icon}</div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-primary group-hover:text-blue-400 transition-colors line-clamp-1">
                    {event.title}
                  </h4>
                  <span className="text-xs text-secondary">{event.participants}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <a
          href="#events"
          className="block mt-5 text-center text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
        >
          Ver todos os eventos →
        </a>
      </div>

      {/* Quick Tools */}
      <div className="card-dark p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛠️</span>
            <h3 className="font-bold text-primary">Ferramentas</h3>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.href}
              className="card-dark-interactive p-4 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{tool.icon}</div>
              <span className="text-xs text-secondary group-hover:text-primary font-medium transition-colors">{tool.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Discord Widget */}
      <div className="card-dark p-6 text-center">
        <div className="text-4xl mb-3">💬</div>
        <h3 className="font-bold text-primary mb-2">Junte-se ao Discord</h3>
        <p className="text-sm text-secondary mb-4 leading-relaxed">
          Participe da nossa comunidade e tire suas dúvidas em tempo real
        </p>
        <a
          href="#discord"
          className="btn-primary w-full inline-flex items-center justify-center gap-2"
        >
          <span>📢</span>
          Entrar no Discord
        </a>
      </div>
    </aside>
  );
}