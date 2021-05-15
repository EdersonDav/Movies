import Layout from 'components/Layout';
import Slider from 'components/Slider';
import Catalog from 'components/Catalog';
import { HomeWrapper, HomeTitles, HomeCatalogWrapper } from './style';

const Home = () => {
  return (
    <Layout>
      <HomeWrapper>
        <div>
          <HomeTitles>
            <span />
            <h2>
              <strong>LANÇAMENTOS&nbsp;</strong>DA SEMANA
            </h2>
          </HomeTitles>
          <Slider />
        </div>

        <HomeCatalogWrapper id="catalog">
          <HomeTitles>
            <span />
            <h2>
              <strong>CATÁLOGO&nbsp;</strong>COMPLETO
            </h2>
          </HomeTitles>
          <hr />
          <Catalog />
        </HomeCatalogWrapper>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
