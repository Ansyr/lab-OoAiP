import logo from "./logo.svg";
import "./App.css";
import { Header } from "@components/header/Header";
import { Route, Routes } from "react-router-dom";
import { Container } from "@components/layout/container/Container";
import { CatalogPage } from "./pages/catalog-page/CatalogPage";
import { MainPage } from "./pages/main-page/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/catalog" element={<CatalogPage/>} />
          </Routes>
        </Container>
      </main>
    </div>
  );
}

export default App;
