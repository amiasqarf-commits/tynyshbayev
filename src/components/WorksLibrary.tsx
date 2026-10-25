import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Award,
  FileText
} from 'lucide-react';

interface WorkEntry {
  id: string;
  title: string;
  yearOrEra: string;
  theme: string;
  summary: string;
  context: string;
  significance: string;
}

const EXTENDED_WORKS: WorkEntry[] = [
  {
    id: 'w-materials',
    title: '«Материалы по истории киргиз-казахского народа»',
    yearOrEra: '1925–1927 жж.',
    theme: 'Фундаменталды тарихнама және этногенез',
    summary: 'Мұхамеджан Тынышбаевтың басты классикалық монографиясы. Қазақ халқының қалыптасуы, ру-тайпалық құрылымы, хандар хронологиясы мен этногенезін жүйелеген ғылыми еңбек.',
    context: 'А.П. Чулошниковтың қазақ халқы тарихына қатысты кітабындағы ұлт намысына тиетін пікірлерге қарсы ғылыми сын жазып, оны академик В.В. Бартольдке жолдаған соң, академиктің ақылымен осы іргелі зерттеуді жазып қалдырған.',
    significance: 'Қазақ тарихын орыс-шығыс деректері мен халықтық шежіре арқылы академиялық үлгіде дәлелдеген тұңғыш төл еңбек.'
  },
  {
    id: 'w-xvii-xviii',
    title: '«Киргиз-казахи в XVII-XVIII веках»',
    yearOrEra: '1926–1927 жж.',
    theme: 'XVII–XVIII ғасырлардағы Қазақ хандығы',
    summary: 'Есім хан, Тәуке хан кезеңдері, жоңғар шапқыншылығы мен қазақ мемлекеттілігінің дипломатиялық және әскери күресін шынайы деректермен зерттеген монографиялық еңбегі.',
    context: 'Академик В.В. Бартольдтің ұсынысымен болашақ зерттеушілер үшін тарихи деректер мен материалдарды ғылыми негіздеп жазған.',
    significance: 'Қазақ хандығының халықаралық саясаттағы беделі мен тарихи тұлғалардың рөлін ашып көрсетті.'
  },
  {
    id: 'w-aqtaban',
    title: '«Ақтабан шұбырынды»',
    yearOrEra: '1927 жыл',
    theme: 'Халық қасіреті және ел тағдыры',
    summary: '1723 жылғы «Ақтабан шұбырынды, Алқакөл сұлама» тарихи трагедиясын, оның себеп-салдары мен халықтың бастан кешкен азапты көш-қонын түпқазық етіп алып талдаған зерттеуі.',
    context: 'Қазақ халқының өміріне, кейінгі тағдырына әсер еткен ең ауыр кезеңді ұлттық мүдде тұрғысында бағалау.',
    significance: 'Тарихи оқиғаларды жүйелі түрде қарастырып, ұлт бірлігінің маңыздылығын ғылыми тұрғыда негіздеді.'
  },
  {
    id: 'w-shezhire',
    title: '«Қырғыз-қазақ руларының шежіресі»',
    yearOrEra: '1924–1925 жж.',
    theme: 'Шежіретану және рулық құрылым',
    summary: 'Қазақтың Ұлы жүз, Орта жүз және Кіші жүз руларының генеалогиясын, тарихи тармақтары мен ұрандарын жүйелі кестеге түсірген зерттеуі.',
    context: 'Ташкентте «Талап» мәдени-ағарту ұйымында жүрген кезеңде қағазға түсірген.',
    significance: 'Шежірені аңыз-әпсана емес, дәл тарихи дереккөз ретінде ғылыми айналымға енгізудің үлгісін жасады.'
  },
  {
    id: 'w-autonomy-1905',
    title: '«Қазақтар және азаттық қозғалысы»',
    yearOrEra: '1905 жыл (Жариялануы: «Русский Туркестан», №1, 1906)',
    theme: 'Саяси баяндама және ұлттық теңдік',
    summary: '1905 жылы 19 қарашада өткен автономияшылардың бірінші съезінде жасаған атақты баяндамасы. Патша үкіметінің қазақ жерін тартып алу, тіл мен дінді орыстандыру, халықты құқықсыз ету саясатын әшкереледі.',
    context: '1905 жылғы революция тұсында 26 жасар институт студенті Мұхамеджанның биік мінберден сөйлеген сөзі.',
    significance: 'Патша шенеуніктерінің соңынан тыңшылық аңду қоюына себеп болған, ел мүддесін қорғаған алғашқы тарихи манифест.'
  },
  {
    id: 'w-current-situation',
    title: '«Қазақтың қазіргі жағдайы мен өмірге қажетті сұранымының жалпы сипаттамасы»',
    yearOrEra: '1906 жыл',
    theme: 'Қоғамдық-саяси талдау',
    summary: 'Қазақ халқының патшалық отарлау кезіндегі ауыр әлеуметтік, жер және құқықтық жағдайын сараптап, одан шығудың нақты жолдарын көрсеткен мақаласы.',
    context: 'Петербор зиялылары мен қазақ оқығандарына арналған бағдарламалық еңбек.',
    significance: 'Қазақ елінің азаматтық теңдікке ұмтылуының теориялық негіздемесі.'
  },
  {
    id: 'w-qazaq-newspaper',
    title: '«Қазақ» газетіндегі әскери-техникалық және тарихи мақалалары',
    yearOrEra: '1913–1918 жж.',
    theme: 'Ағартушылық және халықаралық публицистика',
    summary: '«Соғысушы патшалар әскері», «Сүңгуір қайық», «Темір жол һәм Еуропа соғысы», «Соғыс кемелері һәм мина», «Барлыбек Сыртанов», «Садуақас Шалымбеков» т.б. мақалалары.',
    context: 'Орынборда шығып тұрған «Қазақ» газеті төңірегіндегі Әлихан Бөкейхан, Ахмет Байтұрсынұлымен бірлескен ағартушылық жұмысы.',
    significance: 'Қазақ оқырмандарына дүниежүзілік техникалық және әскери жетістіктерді ана тілінде түсіндіріп, ұлт қайраткерлерінің бейнесін мәңгілікке жазып қалдырды.'
  }
];

export const WorksLibrary: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<WorkEntry>(EXTENDED_WORKS[0]);
  const [search, setSearch] = useState('');

  const filtered = EXTENDED_WORKS.filter(
    (w) =>
      w.title.toLowerCase().includes(search.toLowerCase()) ||
      w.theme.toLowerCase().includes(search.toLowerCase()) ||
      w.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Banner */}
      <div className="bg-[#f5ede0] p-6 sm:p-7 rounded-2xl border border-[#dfcfbc] shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ebdcc9] text-[#78471e] text-xs font-sans-ui font-semibold mb-2 border border-[#d8c5af]">
          <BookOpen size={13} />
          <span>Ғылым мен ел қызметін ұштастырған мұра</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#1a1512]">
          Ғылыми еңбектері
        </h2>
        <p className="text-xs sm:text-sm text-[#544336] font-sans-ui mt-1 leading-relaxed max-w-3xl">
          А.П. Чулошниковтың қазақ тарихына қатысты еңбегіне сын жазып, әлемдік шығыстанушы академик В.В. Бартольдпен байланыс орнатуы, «Материалы по истории киргиз-казахского народа», «Қазақтар және азаттық қозғалысы», шежіре мен «Қазақ» газетіндегі жазбалары.
        </p>
      </div>

      {/* Main Principle Callout */}
      <div className="p-5 rounded-2xl bg-[#fffcf5] border-2 border-[#8d4f27] shadow-sm">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-[#ebdcc9] text-[#8d4f27] shrink-0 mt-0.5">
            <ShieldCheck size={22} />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8d4f27] font-sans-ui block">
              Ғалымның басты ғылыми принципі:
            </span>
            <p className="text-sm sm:text-base font-serif italic text-[#2b1f17] leading-relaxed">
              «Қандай да бір халықтың тарихын жазу үшін сол ұлттың тілін, салт-дәстүрін, мәдениетін жетік меңгеру керек!»
            </p>
            <p className="text-xs text-[#5e4d41] font-sans-ui pt-0.5">
              Тынышбаев бұл принципті өзі берік ұстанды және өзге барлық ғалымдар мен зерттеушілердің де осы талапты орындауын талап етті.
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8c7b6d]" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Еңбектер ішінен іздеу..."
          className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#fffdfa] border border-[#dfcfbc] text-xs font-sans-ui text-[#1a1512] placeholder-[#9c8b7e] focus:outline-none focus:ring-1 focus:ring-[#8d4f27]"
        />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left List */}
        <div className="lg:col-span-5 space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#695444] font-sans-ui block px-1">
            Негізгі тарихи және қоғамдық еңбектер:
          </span>

          <div className="space-y-2">
            {filtered.map((work) => {
              const isSelected = selectedWork.id === work.id;
              return (
                <div
                  key={work.id}
                  onClick={() => setSelectedWork(work)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-[#fffefb] border-2 border-[#8d4f27] shadow-md -translate-y-0.5'
                      : 'bg-[#f8f1e6] border-[#dfcfbc] hover:bg-[#fffcf7]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[11px] font-bold text-[#8d4f27] font-sans-ui">
                      {work.yearOrEra}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ebdcc9] text-[#4d3c30] font-sans-ui font-medium">
                      {work.theme}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-[#1a1512] leading-snug">
                    {work.title}
                  </h4>
                  <p className="text-xs text-[#524135] mt-1 line-clamp-2 leading-relaxed">
                    {work.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Dossier */}
        <div className="lg:col-span-7">
          <div className="bg-[#fffefb] border-2 border-[#d3beaa] rounded-2xl p-6 shadow-sm sticky top-28 space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#8d4f27] text-white text-xs font-bold font-sans-ui">
                  {selectedWork.yearOrEra}
                </span>
                <span className="text-xs text-[#78471e] font-sans-ui font-semibold">
                  {selectedWork.theme}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a1512] mt-2 leading-snug">
                {selectedWork.title}
              </h3>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#695444] font-sans-ui block">
                Жазылу тарихы мен дерек көзі:
              </span>
              <p className="text-xs sm:text-sm text-[#30241b] leading-relaxed text-justify">
                {selectedWork.context}
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#695444] font-sans-ui block">
                Еңбектің мазмұны:
              </span>
              <p className="text-xs sm:text-sm text-[#30241b] leading-relaxed text-justify">
                {selectedWork.summary}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#fff9ed] border-l-4 border-[#8d4f27] border border-[#f0debe]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8d4f27] font-sans-ui block mb-1">
                Тарихи маңызы:
              </span>
              <p className="text-xs sm:text-sm text-[#423328] italic leading-relaxed">
                {selectedWork.significance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
