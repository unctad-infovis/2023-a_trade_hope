import React, { /* useState, */useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
import ChartContainer from './components/ChartContainer.jsx';
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

const appID = '#app-root-2023-a_trade_hope';

function App() {
  // Data states.
  // const [data, setData] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions,func-names
    !(function () {
      // eslint-disable-next-line no-restricted-syntax,no-void,guard-for-in
      window.addEventListener('message', ((e) => { if (void 0 !== e.data['datawrapper-height']) { const t = document.querySelectorAll(`${appID} iframe`); for (const a in e.data['datawrapper-height']) for (let r = 0; r < t.length; r++) { if (t[r].contentWindow === e.source)t[r].style.height = `${e.data['datawrapper-height'][a]}px`; } } }));
    }());
  }, []);

  return (
    <div className="app">
      {
        // Banner container
      }
      <div className="background cover" style={{ paddingBottom: 0 }}>
        <div className="content_container wide">
          <h2 className="title">A Trade Hope</h2>
          <h3 className="subtitle highlight">The impact</h3>
          <h3 className="subtitle">of the Black Sea Grain Initiative</h3>
          <h4 className="date">March 2023</h4>
        </div>
        <div className="cover_background">
          <div className="flex">
            <div className="unctad_logo_container">
              <img src="https://unctad.org/sites/default/files/2022-11/unctad_logo_white.svg" alt="UNCTAD logo" />
            </div>
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0" />
              <path className="a2" d="M0 20 L30 52 L60 20" />
              <path className="a3" d="M0 40 L30 72 L60 40" />
            </svg>
          </div>
        </div>
      </div>
      <p className="button_container"><a href="https://unctad.org/publication/trade-hope-impact-black-sea-grain-initiative" className="button_blue">Download the report in PDF</a></p>
      {
      // Acknowledgements container
      }
      {/*      <div className="content_container">
        <h4 className="title">Acknowledgements</h4>
        <p>
          This document was prepared under supervision of Miho Shirotori with the contribution of Julien Bliesener, Rodrigo Carcamo, Jeanelle Clarke, Stefan Csordas, Taisuke Ito, Christian Knebel, Graham Mott, Alessandro Nicita, Janvier Nkurunziza, Romain Perez, Ralf Peters, Carlos Razo and Mesut Saygili.
          <br />
          Graphic design and desktop publishing were done by Nadege Hadjémian.
        </p>
      </div> */}
      {
      // Introduction container
      }
      <div className="content_container">
        <p>The war in Ukraine sent shock waves throughout the global economy, in particular through trade disruptions of food and fertilizers from two of the world’s main breadbaskets, Ukraine and the Russian Federation. This left millions of people in developing and least developed countries at the frontline of a food and price crisis.</p>
        <p>In July 2022, two agreements were signed: one is the memorandum of understanding between the United Nations and the Russian Federation to facilitate the unimpeded access for their food and fertilizers exports to global markets. The second is the Black Sea Grain Initiative (BSGI), signed by the Russian Federation, Türkiye, Ukraine, and witnessed by the United Nations to allow the safe export of grain, fertilizers and other foodstuff from Ukrainian ports in the Black Sea.</p>
        <p>These agreements have helped to bring down the cost of food, stabilize global markets and keep them open.</p>
        <p>However, this progress is fragile and price pressures remain. While food prices have gone down from their all-time high at the start of the war, they remain high compared to pre-crises levels. Moreover, currency depreciations prevent many developing countries from benefiting from global price decreases, and, in the most severe cases, prices have even gone up. Additionally, as is so often the case, the most vulnerable bear the brunt, particularly women.</p>
        <p>The United Nations remains committed to both agreements, and to remove all remaining impediments that constrain access of food and fertilizers from the Russian Federation and Ukraine to global markets.</p>
        <p>This report concentrates on showing the benefits of one of the agreements, the Black Sea Grain Initiative, and its contribution to ease market pressures and avert the worst impacts of the food crisis.</p>
        <p><strong>The continuation and effective implementation of both agreements are vital for global food security.</strong></p>
      </div>
      {
      // Section 1 container
      }
      <div className="section_banner_container section_banner_container_1">
        <div className="section_banner"><div className="number">1</div></div>
        <div className="heading_wrapper"><h3>Black Sea Grain Initiative in Numbers</h3></div>
      </div>
      <div className="content_container">
        <h4>Delivering food to the world</h4>
        <div className="figure_container">
          <div className="date">as of 5 March 2023</div>
          <div className="value">+23,000,000</div>
          <div className="description">tonnes of grain were exported under the Initiative</div>
        </div>
      </div>
      <div className="two_column">
        <div className="column">
          <div className="content_container">
            <p>Developing countries have benefitted the most from the Initiative, supporting food security among the most vulnerable.</p>
          </div>
          <div className="chart_container">
            <ChartContainer src="https://datawrapper.dwcdn.net/FcWZ3/" title="Developing countries received the largest share of food exports" />
          </div>
        </div>
        <div className="column">
          <div className="content_container">
            <p>Wheat and corn are among the world’s most used food staples. Under the Initiative, corn and wheat accounted for 77 per cent of exports.</p>
          </div>
          <div className="chart_container">
            <ChartContainer src="https://datawrapper.dwcdn.net/TlobQ/" title="Corn and wheat make up the majority of food exports" />
          </div>
        </div>
      </div>
      <div className="content_container">
        <p>Many developing and least developed countries rely on these grains to provide affordable food for their populations. Under the Initiative, exports of these vital grains from Ukraine were able to resume, reaching global markets. Exports of corn to developed and developing countries have been almost evenly split, at 51 per cent and 49 per cent, respectively. Exports of wheat have gone predominantly to developing countries and least developed countries, representing 65 per cent of total wheat cargo.</p>
      </div>
      <div className="two_column">
        <div className="column">
          <div className="chart_container">
            <ChartContainer src="https://datawrapper.dwcdn.net/vO3vO/" title="Corn reaches developed and developing countries almost equally" />
          </div>
        </div>
        <div className="column">
          <div className="chart_container">
            <ChartContainer src="https://datawrapper.dwcdn.net/lADMJ/" title="Developing countries benefit from the lion’s share of wheat exports" />
          </div>
        </div>
      </div>
      <div className="two_column">
        <div className="column">
          <div className="chart_container">
            <ChartContainer src="https://datawrapper.dwcdn.net/VgjeS/" title="Distribution of corn exports by income" />
          </div>
        </div>
        <div className="column">
          <div className="chart_container">
            <ChartContainer src="https://datawrapper.dwcdn.net/Yso5A/" title="Distribution of wheat exports by income" />
          </div>
        </div>
      </div>
      <div className="content_container">
        <p>The Black Sea Grain Initiative has allowed for greater consistency and predictability. This has helped mitigate price shocks in the international market and facilitated a steady food supply.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/AjyYL/" title="Exports fluctuate but do not falter" />
      </div>
      {
      // Section 2 container
      }
      <div className="section_banner_container section_banner_container_2">
        <div className="section_banner"><div className="number">2</div></div>
        <div className="heading_wrapper"><h3>Gaps still to be closed</h3></div>
      </div>
      <div className="content_container">
        <p>The BSGI accounted for 60 per cent of total Ukrainian export volumes of corn, wheat and barley during the first four months of its operation. However, exports for the period January–November 2022 were 22% below 2021 levels.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/xA5Vv/" title="More than half of Ukrainian grain exports were supported by the Initiative since its signing" />
      </div>
      <div className="content_container">
        <h4>Port activity is still below pre-war levels</h4>
        <p>Since the signing of the Initiative, ship departures from Ukrainian ports have shown a marked increase. However, despite the Initiative’s efforts, there is still more to be done to restore ship departures from Ukraine to 2021 levels.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/XR8b5/" title="Ship departures rose with the Initiative, but remain below 2021 levels" />
      </div>
      <div className="content_container">
        <p>Between the onset of the war and the implementation of the Initiative, rivers became the main shipping routes for Ukrainian exports. Before the war, more than 90 per cent of ships had departed from seaports. However, with the war, this share abruptly dropped to 20 per cent. After the signing of the Initiative, the share almost doubled.</p>
        <p>Trade along rivers has become more important compared to the pre-war period. Trade diversion towards river ports – in particular the river Danube – is also reflected in trade statistics. For the period January to November, Ukrainian grain exports to Romania increased from less than one thousand tonnes in 2021 to more than a million tonnes in 2022.</p>
        <p>But trade via inland waterways comes at a higher cost. River routes cannot handle large dry bulk vessels but instead employ small cargo and multipurpose vessels carrying lower volumes. Furthermore, if the grain’s destination is overseas, as is the case for most developing and least developed countries, it takes more time to reach its final destination when needing to transit the European Union.</p>
        <h4>Ukrainian exports of grain to developing countries remain below pre-war levels</h4>
        <p>Grain exports from Ukraine significantly picked up since the start of the Initiative. Total grain exports during the autumn months came close to levels of the previous year. However, they could not compensate for the trade slump during the first months of the war.</p>
        <p>
          Notably, for every tonne of wheat shipped from Ukraine to developing countries in 2022, there is a gap of two tonnes. The gap of 11.8 million tonnes is equivalent to the annual wheat food consumption of 175 million people, roughly the population of Bangladesh.
          <sup title="According to FAO-AMIS, the world average per capita food use of wheat for the marketing season 2021/22 was 67 kg per year.">1</sup>
          {' '}
          For corn and barley, the export gap is as large as 41 per cent and 82 per cent, respectively, of the previous year’s level.
        </p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/0iMyb/" title="Grain exports to developing countries rose with the Initiative, but gaps are yet to be filled" />
      </div>
      <div className="content_container">
        <p>
          The Initiative has significantly increased exports of grains to LDCs but gaps persist here as well. Two out of three tonnes of Ukrainian wheat destined for LDCs in 2022 were delivered through the Initiative. Since the Initiative started, Ukrainian wheat exports to LDCs more than doubled compared to the start of the war. Nonetheless, there was a substantial gap by the end of the year. The gap of 1.6 million tonnes is equivalent to the annual wheat food consumption of 60 million people living in LDCs, roughly the population of Tanzania.
          <sup title="According to OECD-FAO Agricultural Outlook 2022-2031 (2022), average per capita food consumption of wheat in least developed countries was 27.1 kg per year.">2</sup>
        </p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/6e4b6/" title="Ukrainian wheat exports to least developed countries more than doubled compared to the start of the war, but more is needed" />
      </div>
      {
      // Section 3 container
      }
      {
      // Section 2 container
      }
      <div className="section_banner_container section_banner_container_3">
        <div className="section_banner"><div className="number">3</div></div>
        <div className="heading_wrapper"><h3>The fragility of food prices</h3></div>
      </div>
      <div className="content_container">
        <h4>Food prices have come down from record levels but remain high</h4>
        <p>The Food and Agriculture Organization (FAO) reports that food prices are almost 18 per cent lower than their all-time high in March 2022, following the start of the war in Ukraine. This downward trend in prices was supported by the efforts of the Black Sea Grain Initiative.</p>
        <p>
          However, price levels are still high when compared to pre-war and pre-pandemic levels. Food prices in January 2023 were 45 per cent above the average over the past two decades. Furthermore, concerns persist for the stability of future food prices, which may be undermined by climatic factors, risk of market disruptions, export restrictions, high energy costs, and weakening global demand for food
          <sup title="Vos R et al (2023). Is food price inflation really subsiding? IFPRI Blog.">3</sup>
          .
        </p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/gp2Y2/" title="The Initiative has helped to reverse rising food prices, but affordability remains a challenge" />
      </div>
      <div className="content_container">
        <h4>Not all countries have benefitted from declining prices</h4>
        <p>
          Exchange rates have had an impact on the affordability of goods in local markets. As reported by UNCTAD
          <sup title="UNCTAD (2022). A Double Burden: The effects of food price increases and currency depreciations on food import bills.">4</sup>
          , in 2022, as the US dollar appreciated in value, currencies in many developing countries depreciated. This currency depreciation increased import costs paid by developing countries, many of which rely heavily on imports for crucial products like cereals.
        </p>
        <p>One example that demonstrates this fact is the case of wheat. In a positive development, the international reference price of wheat has declined since October 2022. Yet in some cases, the cost of purchasing wheat in local currencies has increased during the same period. As a result, many of those living in poorer, import- dependent countries pay more for basic food items.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/BqNyY/" title="Some developing countries are not benefitting from declining wheat prices" />
      </div>
      <div className="content_container">
        <p>While most developing countries are paying lower prices when compared to the record highs seen in May 2022, currency depreciations have partly eroded the benefits of declining international prices. In some cases, depreciations have been so sharp that the wheat price in domestic currency surpasses record levels. This is the case, for instance, in Egypt, Suriname, South Sudan and Ghana.</p>
      </div>
      <div className="chart_container">
        <h4>Currency depreciations reduce or even offset benefits from lower wheat prices</h4>
        <h5>Change in wheat reference prices January 2023 compared to May 2022 peak, by currency</h5>
        <img src={`${window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2023-a_trade_hope/assets/img/' : './assets/img/'}2023-a_trade_hope_figure15-min.png`} alt="urrency depreciations reduce or even offset benefits from lower wheat prices" />
        <h6>
          <em>Source:</em>
          {' '}
          <span>Refinitiv- Eikon and World Bank’s Pink Sheet (February 2023)</span>
        </h6>
        <h6>
          <em>Note:</em>
          {' '}
          <span>Countries in bold are least developed countries (9). The selected countries depicted in the graph are those for which exchange rate movements offset more than 25% of the decline in US dollar-denominated wheat prices.</span>
        </h6>
      </div>

      <div className="content_container">
        <h4>Women bear the brunt of the impact</h4>
        <p>
          The World Food Programme, and Food and Agriculture Organization
          <sup title="WFP and FAO. 2022. Hunger Hotspots. FAO WFP early warnings on acute food insecurity: October 2022 to January 2023 Outlook.">5</sup>
          {' '}
          warn that acute food insecurity is escalating, affecting as many as 828 million people worldwide. LDCs are disproportionately at risk of food insecurity, with several countries facing complex and prolonged humanitarian crises. They are in need of emergency intervention to avert the imminent risk of starvation. Trade in staple food items forms a key component of this emergency response.
        </p>
        <p>
          Moreover, the “cost of living crisis” tends to have a harsh effect on the poorest and most vulnerable segments of the population. It widens inequalities not only between countries but also within. As poorer households spend a relatively larger share of their income on necessary goods like food, they tend to be more adversely affected by high food inflation. Globally and regionally, the prevalence of food insecurity has been historically higher among women than men
          <sup title="UN Women (2022). Global Gendered Impacts of the Ukraine Crisis on Energy Access and Food Security and Nutrition.">6</sup>
          , and the gender gap has widened since 2019. There is a serious concern that women and children might suffer disproportionately from high food prices.
        </p>
        <p>With limited resources to cushion any temporary shock, poorer households are more likely to resort to coping strategies that create adverse long-term effects on living standards. This is the case, for example, when prolonged food insecurity permanently affects the health or strength of children, or when poor parents are forced to take their kids out of school to cope with lower income. Consequently, households’ future income prospects are lower, potentially turning a temporary shock (so-called “transient poverty”) into a longer-term phenomenon.</p>
      </div>
      <div className="chart_container">
        <ChartContainer src="https://datawrapper.dwcdn.net/axL4c/" title="Women face a higher risk of food insecurity" />
      </div>
      <div className="last_slide background">
        <div className="content_container">
          <h3 className="highlight">The Initiative is an important part of the global response</h3>
          <p className="highlight">The Black Sea Grain Initiative is one example of concrete action to navigate some of the worst cost-of-living crises the world has faced in a generation. But concerted global efforts are needed to work in tandem.</p>
          <p className="highlight">The Initiative has managed to steer trade in the right direction to provide more accessible and affordable food for all. Nevertheless, more needs to be done. The Black Sea Grain Initiative has yielded results that need to be scaled up.</p>
          <p className="highlight">There is too much at stake and the situation is dire. Without the Initiative, the lives of millions more are placed in a precarious position. The renewal of the Black Sea Grain Initiative provides hope that the world’s most vulnerable can make it through the crises.</p>
          <p>And every effort is needed to keep this hope alive.</p>
          <br />
          <p className="button_container"><a href="https://unctad.org/publication/trade-hope-impact-black-sea-grain-initiative" className="button">Download the report in PDF</a></p>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
