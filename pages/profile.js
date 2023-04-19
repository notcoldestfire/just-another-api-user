import Meta from '../components/Meta'

export default function Home({ circle_data }) {
  console.log(circle_data);

  const rows = circle_data.data.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.amount.amount} {item.amount.currency}</td>
      <td>{item.status}</td>
      <td>{new Date(item.createDate).toLocaleString()}</td>
    </tr>
  ))
  
  return (
    <div>
      <Meta title='Profile' />
      <h1 className="text-3xl font-bold underline">Profile (Wallet ID: 1015155127)</h1>
      <br />
      Transactions
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Transaction Date</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: 'Bearer QVBJX0tFWTplMzA4YjA5YzNjYjQ2YTIwMTMyZDQzMTA2MmJlNWQxNTozZTQzNWVmMTA1NDBhYzIzZTU1MmE4OTRiNTZlNDAwZQ=='
    }
  };

  const res = await fetch('https://api-sandbox.circle.com/v1/transfers?walletId=1015155127&returnIdentities=false', options);
  const circle_data = await res.json();

  return {
    props: {
      circle_data,
    }
  }
}