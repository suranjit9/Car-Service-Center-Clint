

const BookListDesigan = ({book, hendaleDelet, handalConform}) => {
    const {img, title, price, date, _id, status} = book ;
    return (
         <tr>
                <th>
                  <label>
                    <button onClick={()=> hendaleDelet(_id)}>x</button>
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{title}</div>
                      {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost ">{price}</span>
                </td>
               
                <th>
                  <button className="btn btn-ghost btn-xs">{date}</button>
                </th>
                <th>
                  {
                    status === "Confirm" ? <samp className="text-green-700 font-bold">Confirm</samp>
                    :<button onClick={()=>handalConform(_id)} className="btn btn-ghost btn-xs">Astatas</button>
                  }
                </th>
              </tr>
         
    );
};

export default BookListDesigan;