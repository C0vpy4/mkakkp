import { CardSection, FormSection, Hero, Salary, Sections } from "./components";
import { Footer } from "./shared";

export default function Home() {
  return (
    <div className="text-stone-900 px-2 sm:px-10 md:px-10 lg:px-10 uppercase min-h-screen w-full">
      <div className="mt-[50px] z-10 w-full">
        <Hero />
      </div>
      <div className="z-50 absolute mt-20 bg-blue-600 left-0">
        <Sections
          title="3+ Лет стабильной работы"
          description="Наша адвокатская коллегия с 2020 года успешно оказывает юридическую
           помощь клиентам, зарекомендовав себя как надежного партнера в решении самых 
           сложных правовых вопросов. За три года стабильной работы мы 
            значительный практический опыт, позволивший нам выиграть десятки дел в 
            различных отраслях права - от уголовных процессов до арбитражных споров. 
            Наши адвокаты специализируются на конкретных направлениях, что обеспечивает 
            глубокую проработку каждого случая и разработку индивидуальной стратегии. Мы гордимся тем, что многие клиенты обращаются к нам по рекомендациям - это лучшая оценка нашей работы"
        />
        <Sections
          title="4.8 рейтинг"
          description="Мы ценим каждую положительную оценку и рассматриваем ее как мотивацию 
          для дальнейшего развития. Наша цель — не просто поддерживать высокий рейтинг, а ежедневно подтверждать его реальными делами и победами 
          в интересах клиентов. Ваше доверие — наша главная награда. И мы продолжаем работать, 
          чтобы его оправдывать"
          bgColor="bg-white"
          textColor="text-black"
        />
        <Sections
          title="15 лет стажа председателя"
          description="Кятова Зарета Магометовна – опытный адвокат с 15-летним стажем успешной 
          юридической практики. За годы профессиональной деятельности она зарекомендовала
           себя как грамотный и принципиальный специалист, добивающийся максимально благоприятных
            результатов для своих доверителей даже в самых сложных правовых ситуациях. 
            Ее экспертиза охватывает широкий спектр направлений: уголовное право, гражданские 
            и арбитражные споры, семейные и наследственные дела. Благодаря глубоким знаниям 
            законодательства, аналитическому мышлению и внимательному подходу к каждому клиенту, Зарета 
            Магометовна consistently находит оптимальные пути решения правовых проблем"
          bgColor="bg-stone-900"
          textColor="text-white"
        />
        <div className=" bg-stone-900 text-white p-10 py-20">
          <Salary />
        </div>
        <div className="bg-white p-10 py-20">
          <FormSection />
        </div>
        <div className="bg-white w-full">
          <CardSection />
        </div>
        <div className="bg-stone-900 text-white px-10 pt-20">
          <Footer />
        </div>
        {/* <div className="bg-stone-900 absolute text-nowrap overflow-x-hidden text-center justify-center -left-20 text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal font-['Cygre'] uppercase leading-tight sm:leading-normal md:leading-relaxed lg:leading-[98px] tracking-[2.88px]">
          Кятова, Клячковский и Партнёры
        </div> */}
      </div>
    </div>
  );
}
