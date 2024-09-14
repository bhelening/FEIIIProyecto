import { useContextGlobal } from "../Components/utils/useContextFunction";
import Card from "../Components/Card";

const Favs = () => {
  const { state, dispatch } = useContextGlobal();
  const { favs } = state;

  const favoritesContent =
    favs.length === 0
      ? "No hay favoritos"
      : favs.map(item => <Card key={item.id} item={item} />);

  return (
    <>
      <h1 className="py-4">Dentistas Favoritos</h1>
      <p className="text-center pb-4">
        <button
          onClick={() => dispatch({ type: "CLEAN-FAVS" })}
          className="btn btn-lg btn-danger"
        >
          Eliminar Favoritos
        </button>
      </p>
      <div className="card-grid">{favoritesContent}</div>
    </>
  );
};

export default Favs;
