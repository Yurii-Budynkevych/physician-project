import "./TestimonialsList.css";
import PropTypes from "prop-types";

export function TestimonialsList({ arr }) {
  return (
    <ul className="testimonials-list">
      {arr.map((el) => (
        <li className="testimonials-list-item" key={el._id}>
          <h3 className="testimonials-list-title">{el.name}</h3>
          <p className="testimonials-list-text">{el.testimonial}</p>
        </li>
      ))}
    </ul>
  );
}

TestimonialsList.propTypes = {
  arr: PropTypes.array.isRequired,
};
