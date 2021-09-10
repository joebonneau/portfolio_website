import React, { useState, useEffect } from "react";
import "./App.css";
import { Container } from "semantic-ui-react";
import { TopMenu } from "./components/TopMenu";
import { Repos } from "./components/Repos";
import { Footer } from "./components/Footer";
import "semantic-ui-css/semantic.min.css";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("/api/repo")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.repos);
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <TopMenu />
      <div className="Body">
        <Container>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          incidunt consequuntur tempore? Doloremque sequi optio exercitationem,
          laboriosam labore necessitatibus obcaecati officia vitae, molestias
          commodi dignissimos suscipit rerum deleniti tempore dolor. Iste nisi
          voluptates est impedit quasi quidem amet molestiae libero dolore
          eaque. Rem nostrum qui possimus officiis itaque ipsam recusandae
          deserunt laudantium quis corrupti tempore debitis nihil, cum ab
          asperiores. Neque aliquid iusto vitae aperiam recusandae tempore ipsa
          cumque fuga ipsum? Iusto ratione temporibus dicta illum sed eligendi
          deserunt! Modi officia totam repudiandae voluptas perferendis magnam
          laborum culpa similique ipsum. Voluptatem, minus animi explicabo eius
          voluptatum laudantium fugit accusamus sequi soluta voluptates sed
          cupiditate commodi perferendis quis rem velit qui temporibus quam
          expedita facere magnam tempora pariatur, autem hic? Ullam? At nihil
          sed minus dolores necessitatibus enim corporis. Aspernatur alias
          cupiditate nulla asperiores eum exercitationem explicabo vero eaque
          odit. Odit officia similique ad esse maiores nemo! Quibusdam dolores
          et optio? Voluptatum nulla atque obcaecati quia? Delectus blanditiis
          placeat dolore beatae eaque voluptates accusantium sed! Provident
          velit numquam, sint, reiciendis, dolore quaerat tempore maxime illum
          dolorum vel iusto nihil perspiciatis asperiores. Ipsum, eius adipisci!
          Vero eveniet sint repellat aspernatur, reiciendis error, tempora
          maxime obcaecati laboriosam doloremque quo et doloribus, maiores iure
          repellendus magnam ea quasi veniam molestias alias distinctio ut
          dicta! Ullam ipsam asperiores fuga quis ut expedita suscipit dolores?
          Consequuntur, veritatis? Suscipit, ratione similique. Beatae id ipsum
          amet soluta quia quasi eaque inventore nostrum ad quo porro, libero
          cum nihil. Atque consequuntur sapiente quod voluptates impedit dolore
          maiores soluta, repellendus debitis odio tempora officiis obcaecati
          dolorum ipsam quasi cum veniam vel nesciunt commodi illo nulla
          recusandae laboriosam natus? Qui, sit? Atque, ratione quas explicabo
          officia, rerum praesentium hic consectetur at repellat provident
          laborum! Accusamus rem tempora a placeat sint debitis nihil. Officiis
          alias unde asperiores non minima facilis velit veritatis! Totam illum
          doloremque praesentium facilis minus hic. Necessitatibus reprehenderit
          minima consectetur non dolorum fuga quis repellat animi adipisci
          quisquam at officiis, facilis laudantium delectus. Facere, rem.
          Asperiores cumque quas quae! Commodi fugiat veritatis molestias atque
          necessitatibus quibusdam vero repudiandae esse dolorem error cumque,
          fuga labore temporibus sequi, aspernatur sit, placeat quis laudantium?
          Iste quis animi perferendis eum amet pariatur enim? Tempora et fuga,
          voluptatem officia ratione quia molestiae eum dolorem fugiat illum,
          sapiente a amet facilis! Cum reprehenderit repellendus iste officiis
          esse veritatis facere exercitationem! Assumenda ipsam et obcaecati
          magni? Expedita illum eaque voluptate sapiente, unde placeat possimus
          ratione deleniti neque porro quidem eligendi. Impedit, soluta deleniti
          obcaecati, quasi consectetur dignissimos et ea vitae, assumenda
          reprehenderit rem voluptates explicabo. Quia! Hic, cupiditate eos?
          Explicabo minus reprehenderit ratione deleniti culpa eos at delectus
          aspernatur aut asperiores? Possimus cum voluptates, nobis quibusdam
          illum inventore? Earum ea culpa maxime! Deleniti tempore quod maxime?
          Laboriosam, cumque soluta, error neque quae sint itaque, inventore
          quos qui impedit a excepturi illum! Aliquam iste rem, veritatis beatae
          soluta odio a quos architecto ab nesciunt distinctio. Mollitia,
          veniam? Hic deleniti in quasi debitis inventore corporis! Corrupti
          esse quas possimus harum! Rerum veniam sed quae consequatur animi
          deleniti expedita, itaque adipisci aut. Facere laudantium voluptatum
          nihil neque et eligendi! Quas, reprehenderit laboriosam! Possimus amet
          aut delectus consectetur, deleniti, ullam facilis facere nesciunt eius
          id, iusto eum illo? Vero itaque error quis minus assumenda facilis
          maiores omnis illo ea est! Voluptates illum corporis id quod, ipsa
          ipsam, blanditiis odio, iusto natus et ea porro nesciunt sed. Harum
          quia eum ipsum mollitia iure, aperiam odit labore explicabo recusandae
          a, illum voluptates? Incidunt, minus amet. Voluptates itaque iusto at
          nostrum autem harum. Quos ab impedit reprehenderit rerum sapiente
          distinctio doloribus exercitationem odit repellendus? Ipsam
          voluptatibus suscipit inventore illo iure aspernatur beatae!
          Voluptates? Sint nulla earum, praesentium accusantium repudiandae
          placeat eos expedita sapiente officia quam dolorum dolores facere nisi
          voluptatibus, enim aliquam dolorem deserunt magnam unde. Nihil aliquid
          est consequatur nisi vitae fugiat. Corrupti obcaecati eius ex nesciunt
          consequatur voluptas, et, aspernatur non provident assumenda molestias
          animi nostrum similique nemo cupiditate aliquid velit saepe doloremque
          numquam amet. Minima velit nemo quas enim impedit. Expedita,
          repudiandae magni impedit nemo nobis illo non assumenda vel officia
          est fugiat suscipit? Accusamus numquam corporis, quia enim laborum
          ipsam esse, cum ex sit omnis fugiat vitae iure eos? Deleniti delectus
          eum ut consequatur error minus velit! Error ipsam officiis
          necessitatibus excepturi impedit nulla eos, obcaecati aperiam
          consequuntur illo ducimus. Temporibus id ratione odit asperiores ad
          est dignissimos soluta? Quas, aspernatur perspiciatis? Laudantium
          libero non quibusdam neque inventore odio pariatur eius amet
          reprehenderit incidunt est itaque, labore atque, nostrum reiciendis!
          Nostrum modi quisquam nemo fugit eius perspiciatis quo quos! Odio quis
          praesentium harum aliquid repellat enim inventore reprehenderit ab id
          sunt. Porro voluptas alias adipisci libero laudantium molestiae
          distinctio! Reprehenderit eligendi nisi fuga incidunt aliquam
          exercitationem odit fugit eius! Beatae nesciunt porro cum quam ab non
          molestiae nobis soluta assumenda. Nesciunt est asperiores saepe?
          Ducimus, non laborum illo molestiae deserunt delectus, porro ipsum
          ipsa accusantium velit, sit dolorem dolores! Esse veniam excepturi
          debitis, quo pariatur commodi! Vero eius, magnam distinctio vitae eos
          commodi error ducimus, consequatur, totam facilis fugiat odit modi.
          Quaerat error iusto voluptas, ad nostrum blanditiis placeat! Esse
          suscipit vitae nisi delectus laborum at unde, tenetur veritatis.
          Facilis temporibus quam reiciendis commodi impedit illum aspernatur
          numquam ea soluta? Voluptatibus mollitia cupiditate hic voluptate ut
          nobis iste voluptates! Perferendis, quibusdam fugit sint, omnis neque
          provident iste repudiandae unde quasi, ipsam eligendi maiores facilis
          impedit minus. Excepturi beatae pariatur iure, reiciendis quia,
          consequatur laboriosam amet non perferendis facere adipisci. Ut
          aspernatur totam quod voluptas quos illo. Culpa, aspernatur molestiae?
          Cumque ipsam laborum inventore animi? Repudiandae, excepturi veniam.
          Eaque voluptatem cumque delectus nam saepe distinctio, autem odit quam
          quisquam corporis! Nam eos, iste quam voluptas magni neque ducimus in
          saepe quas nisi molestias enim eveniet nulla. Rem alias corrupti
          temporibus, porro laborum iste dolorem, perspiciatis velit excepturi
          itaque dolor nulla! Odio saepe, adipisci ex at nesciunt excepturi
          tempore sequi quam omnis vitae incidunt? Incidunt doloremque obcaecati
          cupiditate, aut sapiente omnis enim vero deserunt quae facilis aliquid
          voluptatem, vitae, at saepe. Minima magnam nulla velit eum atque
          incidunt cupiditate? Voluptate aperiam eligendi voluptatem totam
          sapiente reiciendis soluta iure velit repudiandae rerum vero,
          excepturi laudantium, doloribus unde, ipsa ut omnis veniam itaque?
          Reiciendis accusantium, suscipit, corporis consequuntur hic laboriosam
          quaerat eum dignissimos ipsam ex quam ratione deserunt. Assumenda
          explicabo atque perspiciatis alias qui eius blanditiis tenetur totam
          tempora, asperiores ex mollitia. Eligendi. Voluptatibus mollitia dicta
          cum atque nisi? Cumque corrupti suscipit quod qui, tenetur tempora
          quasi aut quisquam veritatis assumenda, modi dolores ut, architecto
          eaque et accusantium necessitatibus sint ipsam. Ducimus, officiis!
          Temporibus, maxime et fuga nihil alias a placeat voluptatibus quasi
          consequuntur libero enim commodi, ex eum ducimus earum vel
          necessitatibus saepe nisi reprehenderit illum velit? Consequatur
          asperiores natus illum doloremque? Quas vel suscipit libero molestiae
          eaque velit harum natus aliquam fugit neque iure enim recusandae
          aperiam obcaecati, possimus dolor in? Nisi ex vel veniam rerum
          perspiciatis sequi officia, illo ducimus. Itaque dolorum animi, natus
          voluptatem, accusamus id neque ad quae similique corporis aliquid
          magni asperiores expedita quidem tenetur ipsa sapiente debitis nobis
          eligendi molestiae iure, ratione ullam in. Consequatur, recusandae?
          Obcaecati at est possimus quisquam. Ipsum voluptatum quia ullam
          corporis aperiam nihil dignissimos perspiciatis adipisci id dolore
          quod accusantium voluptatem eaque quis eveniet perferendis, inventore
          earum cum mollitia voluptate hic! Mollitia libero aperiam harum
          voluptas pariatur officia alias repellat voluptate sequi quisquam
          itaque perferendis debitis non nihil recusandae aliquid laborum qui,
          ullam quis amet! Qui nesciunt dignissimos ea dicta molestias. Fugiat,
          tenetur? Dignissimos explicabo, doloribus obcaecati deserunt eum in!
          Dolor soluta expedita vero dolore omnis eaque nostrum repellat, harum
          saepe beatae ducimus alias eum, facilis veniam quia numquam laudantium
          ut? Quam sunt nam est a porro consequatur! Adipisci totam tempore esse
          nisi recusandae consequuntur libero ipsa praesentium officiis, autem
          pariatur, nostrum ratione facere molestiae aperiam quam ab! In, omnis
          ea. Eaque autem repudiandae voluptatibus natus. Minima officiis maxime
          nisi at voluptates! Officiis repellat quas sunt amet maiores ipsa
          eveniet, minus, minima architecto doloremque eligendi alias. Debitis
          ex molestias voluptatibus nulla? Perspiciatis ipsam iusto quo
          blanditiis saepe repudiandae omnis iure nobis rem minima ad velit
          harum hic aut fugit aliquid sed illo, odio quasi deleniti, similique
          architecto provident beatae! Iure, debitis! Blanditiis, adipisci qui
          iusto eaque id praesentium laborum veniam. Repellat quia nobis odio
          nihil quasi ratione fugiat sint distinctio, deserunt ipsam excepturi
          iste cum impedit assumenda autem libero, deleniti minima. Itaque
          expedita natus dolor saepe aut reiciendis rerum hic consequuntur, ipsa
          cum doloribus repudiandae facilis libero ex tempore nemo eum atque
          nobis voluptatibus dicta laborum voluptate! Nostrum consequuntur
          placeat quos! Voluptatum praesentium porro voluptates officia nihil?
          Sapiente facilis dignissimos veritatis velit sint, cum quia
          consectetur recusandae fugit. Deleniti fuga amet quos aliquam labore
          aperiam, alias exercitationem sequi, incidunt repellendus eos. Sint
          voluptatem dolorum, dolorem officiis reiciendis rerum, natus
          consequatur nobis maiores ducimus ea eos laboriosam aliquam! Quae
          cumque recusandae, maxime sint animi reiciendis accusamus quia magnam,
          itaque quibusdam nam totam! Excepturi voluptates ipsam non, alias,
          earum nulla distinctio cum inventore quis magni cupiditate nisi
          aperiam sunt magnam minima tempore corporis, fugiat assumenda
          provident sequi impedit! Cumque sed itaque expedita accusantium!
          <Repos repos={repos} />
        </Container>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
