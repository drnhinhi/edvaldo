
import React from 'react';
import BreakingBadTitle from './components/BreakingBadTitle';
import CharacterCard from './components/CharacterCard';
import Section from './components/Section';

const App: React.FC = () => {

  const edvaldoTitle = [
    { text: 'Ed', number: 63, detail: 'Europium' },
    { text: 'V', number: 23, detail: 'Vanadium' },
    { text: 'Al', number: 13, detail: 'Aluminum' },
    { text: 'Do', number: 105, detail: 'Dubnium' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-300 selection:bg-green-500 selection:text-gray-900">
      <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm shadow-lg shadow-green-900/20 py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <BreakingBadTitle segments={edvaldoTitle} />
          <h2 className="text-xl md:text-2xl font-bold text-green-400 tracking-widest mt-2 sm:mt-0">
            O BOSS FINAL
          </h2>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        
        <Section title="EPISÓDIO I: A FOICE DO BOSS FINAL">
            <p className="text-lg leading-relaxed text-center italic max-w-4xl mx-auto">
                A galáxia está em caos. Após a explosão da Bomba de Fissão do Conhecimento, o equilíbrio entre ciência e insanidade foi rompido. Das sombras do EESA, um professor lendário desperta — EDVALDO JULIANO DA ROSA, o Boss Final. Metade Jedi, metade cientista, completamente transcendental.
            </p>
            <img src="https://picsum.photos/1200/400?grayscale" alt="Cosmic Chaos" className="w-full h-64 object-cover rounded-lg mt-8 shadow-2xl shadow-green-900/30" />
        </Section>
        
        <Section title="Dramatis Personae">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <CharacterCard name="Edvaldo J. da Rosa" title="O Boss Final" description="Metade Jedi, metade cientista, completamente transcendental. Mestre do conhecimento e do enigmático 'Boa pergunta...'" imageUrl="https://picsum.photos/400/400?random=1" />
            <CharacterCard name="Nikito Pernilonguito" title="O Prodígio Vingativo" description="Jovem gênio da ciência dos mosquitos, agora fundido com seu objeto de estudo. Proclama a Vingança Tropical." imageUrl="https://picsum.photos/400/400?random=2" />
            <CharacterCard name="Leônidas Heisenberg" title="O Imperador Químico" description="Cunhado de Nikito e mente por trás de um império de metanfetamina e caos na Capital Oeste." imageUrl="https://picsum.photos/400/400?random=3" />
            <CharacterCard name="Nycolas D. Pendrive" title="O Advogado Burocrático" description="Conselheiro dos Guardiões do Paraíso, tentando restaurar a ordem com memorandos e café forte. Better Call Nycolas!" imageUrl="https://picsum.photos/400/400?random=4" />
            <CharacterCard name="Senhor das Nuvens" title="Líder dos Guardiões" description="O retornado líder dos Guardiões do Paraíso, buscando reunir os fragmentos da sabedoria perdida." imageUrl="https://picsum.photos/400/400?random=5" />
            <CharacterCard name="Miguel das Costas Raladas" title="Vice-Líder dos Guardiões" description="O braço direito do Senhor das Nuvens, um guerreiro em busca de redenção." imageUrl="https://picsum.photos/400/400?random=6" />
            <CharacterCard name="Gustavinho" title="O Empresário Sombrio" description="Parceiro de Leônidas e dono da Len-Mão LTDA. Um homem de negócios perigoso." imageUrl="https://picsum.photos/400/400?random=7" />
             <CharacterCard name="Rian" title="O Agente Duplo" description="Trai ambos os lados, vendendo segredos da Foice Sagrada para a Gangue Felipe." imageUrl="https://picsum.photos/400/400?random=8" />
          </div>
        </Section>

        <Section title="A Canção do Boss Final" fullWidth>
          <div className="bg-gray-800 p-6 rounded-lg shadow-inner shadow-black/30 max-w-4xl mx-auto">
            <pre className="whitespace-pre-wrap font-mono text-base leading-loose text-green-300">
              {`🎤 [Intro – sussurrado]
(Eu sou… o boss final...)
Nuclear… Tenta… Boa pergunta…
Tem que pesquisar isso aí depois…

🧠 [Verso 1]
Eu sou o boss final, o Edvaldo original,
Com um gesto eu abro porta, tipo mente transcendental.
Boa pergunta… Mas pesquisa depois,
Porque aqui é ciência crua, não é aula dos heróis.
(Nuclear… NUCLEAR…)

🌀 [Verso 2]
Movimento a mão devagar, porta se abre sozinha,
Tipo Jedi com diploma e alma de linha.
Mas não é mágica — é foco, é disciplina,
A mente tão afiada que corta igual lâmina fina.

👑 [Refrão]
Eu sou o boss final, o Edvaldo original,
No tabuleiro do Dama, eu sou o último sinal.
Boa pergunta… Mas pesquisa depois,
Só os sábios atravessam o som da minha voz.
(NUCLEAR… nuclear…)

🔥 [Verso 3]
Teve um dia que a luz acabou, mas eu continuei,
Com fósforo e fósseis, a aula eu mantive em lei.
Contei da bomba de fissão e a humanidade em pranto,
E quando perguntei o que é vida… o silêncio foi o canto.

"Professor, isso é impossível" — alguém murmurou,
Eu sorri: "Boa pergunta, resposta é invisível."
"Mas tenta, vai além, ousa desafiar,"
"Porque ciência é o caos tentando se organizar."

🧪 [Ponte]
(Minha mente é laboratório,
Minhas palavras, experimento.
Meu olhar? Termômetro.
Meu silêncio? Lançamento...)

🌌 [Último Refrão]
Eu sou o boss final, Edvaldo transcendental,
Mestre da partícula e do grito universal.
Não tem cheat, não tem chance, só suor e função,
Se quer me vencer, pesquisa com o coração.

(NU-CLE-AR…)
Eu sou o boss final…

🎤 [Outro – sussurrado]
Tenta... Boa pergunta...
Tem que pesquisar isso aí depois...
(Eu sou… o boss final...)`}
            </pre>
          </div>
        </Section>

        <Section title="A Vingança Tropical">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <img src="https://picsum.photos/600/700?random=9" alt="Nikito e os Mosquitos" className="w-full md:w-1/3 h-auto object-cover rounded-lg shadow-lg shadow-red-900/40" />
                <div className="md:w-2/3 space-y-4 italic text-lg text-red-200">
                    <p>Nikito Pernilonguito. Com um olhar perdido no nada e uma camiseta escrita "Eu converso com os mosquitos".</p>
                    <p>Ele tira um pote. Joga no chão. <span className="font-bold not-italic">CLANG.</span> Fogo. Fumaça. <span className="font-bold not-italic text-xl">ZZZZZZZZZZZZ.</span></p>
                    <p>Das chamas saem enxames de pernilongos em chamas, como pequenos drones infernais...</p>
                    <p>"É o equilíbrio natural", sussurra Nikito, enquanto um pernilongo pousa em seu dedo e o cumprimenta com um soquinho.</p>
                    <p>Você corre. Mas ele não. Ele flutua. Começa a voar devagarzinho, erguido pelos mosquitos como uma divindade tropical.</p>
                    <p className="text-2xl font-bold not-italic text-red-400 mt-6 text-center">"Para cada mosquito esmagado… nascerão sete com fogo nos olhos."</p>
                </div>
            </div>
        </Section>
        
        <Section title="A Confissão de Nikito" fullWidth>
            <div className="bg-gray-900 border border-gray-700 p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">[INÍCIO DA TRANSCRIÇÃO - FITA CONFIDENCIAL]</h3>
                <p className="font-mono leading-relaxed">
                  Meu nome é Nikito Pernilonguito. Moro no Eesa, território de terra Capital oeste. Esta é minha confissão. Se você está assistindo a esta fita, provavelmente estou morto - assassinado por meu cunhado, Leônidas Heisenberg. Leônidas vem construindo um império de metanfetamina há mais de um ano, usando-me como seu químico. [...] Leônidas me forçou a construir uma máquina de teletransporte, e eu fui a primeira cobaia. No teste, um pernilongo entrou na máquina, fazendo meu DNA se fundir com o dele e eu sofrer uma mutação genética que me concedeu poderes. [...] Leônidas tinha um parceiro, um empresário chamado Gustavinho, dono da Len-Mão LTDA. [...] A bomba que ele usou foi construída por mim, e ele não me deu escolha. [...] Recentemente, tentei mais uma vez sair, e em resposta, ele me deu isso. [Nikito aponta para a marca roxa em seu rosto deixada por Leônidas.] Não aguento mais. [...] Atualmente, o Senhor Das Nuvens retomou o controle sobre os guardiões do paraíso. Eles conseguiram recuperar as foices sagradas, com a ajuda do Nycolas e do Miguel das costas raladas, vencendo o confronto contra a gangue Felipe. Eles controlam todo o paraíso e o território de terra da Capital oeste.
                </p>
                <h3 className="text-xl font-bold text-yellow-400 mt-6">[FIM DA TRANSCRIÇÃO]</h3>
            </div>
        </Section>

        <Section title="Memorando Oficial: Gabinete Dr. Nycolas D. Pendrive" fullWidth>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl max-w-4xl mx-auto font-serif">
                <h3 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-6">COMUNICAÇÃO INTERNA - URGENTE</h3>
                <p className="mb-4"><span className="font-bold">PARA:</span> Nikito Pernilonguito</p>
                <p className="mb-4"><span className="font-bold">DE:</span> Gabinete do Dr. Nycolas D. Pendrive</p>
                <p className="mb-6"><span className="font-bold">ASSUNTO:</span> Re: Relato de Enredo Cinematográfico e/ou Crise Existencial</p>
                
                <p className="mb-4">Prezado Senhor Nikito Pernilonguito,</p>
                <p className="mb-4">Acuso o recebimento de sua comunicação — um relato que, confesso, me deixou dividido entre o riso nervoso e a vontade imediata de abrir um manual de procedimentos para casos extremos. Sua mensagem foi registrada no departamento competente: <span className="italic">Seção de Dramaturgia Criminal, Ala de “Como É Que Você Sobreviveu?”</span>.</p>
                <p className="mb-4">Quanto a providências imediatas, recomendo que: Mantenha a calma, preserve todas as provas e priorize a segurança.</p>
                <p className="mb-4">O Dr. Nycolas D. Pendrive encaminhará seu caso ao departamento interno de “consultoria para enredos impossíveis”, reservará uma xícara de café extra forte para análise noturna e considerará a possibilidade de transformar essa história num podcast.</p>
                <p className="mb-4">Solicito que confirme: isto é uma operação de marketing viral digna de prêmio Cannes, ou trata-se de narrativa parcialmente verídica que exige ação imediata? Estou com vários problemas, principalmente envolvendo traição por parte do Rian e wallpapers de Kasane Teto.</p>
                <p className="mb-4">Uma dica, use o Cajado Antedeguemon, ele manipula a realidade.</p>
                <p className="mt-8 mb-2 font-bold">Atenciosamente,</p>
                <p className="font-bold text-xl italic">Advogado Nycolas D. Pendrive</p>
                <p className="text-sm">(Better Call Nycolas!)</p>
            </div>
        </Section>
      </main>

      <footer className="bg-gray-900 border-t border-green-700/30 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} EESA LORE Archives. Todos os direitos reservados... talvez.</p>
          <p className="mt-2">"Boa pergunta... pesquisa depois"</p>
          <div className="mt-4">
            <p>Conexões do Submundo:</p>
            <a href="http://len-mao.rf.gd" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
              Len-Mão LTDA
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
