const CraftRow = ({ craft, idx }) => {
  const {
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stock_status,
    user_email,
    user_name,
  } = craft;
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{item_name}</td>
      <td>{subcategory_name}</td>
      <td>{stock_status}</td>
      <td>
        <btn className="btn btn-primary btn-xs">View Details</btn>
      </td>
    </tr>
  );
};

export default CraftRow;
