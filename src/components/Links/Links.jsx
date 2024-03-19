import PropTypes from "prop-types"; // ES6

const Links = ({ route }) => {
  return (
    <li className="mr-10 hover:bg-red-400 px-6">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Links.propTypes = {
    route: PropTypes.object
}

export default Links;
