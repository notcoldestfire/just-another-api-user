import Meta from '../components/Meta'

export default function Home({ circle_data }) {
  console.log(circle_data);

  const rows = circle_data.data.map((item) => (
    <tr key={item.walletId}>
      <td className="border p-2">{item.walletId}</td>
      <td className="border p-2">{item.entityId}</td>
      <td className="border p-2">{item.type}</td>
      <td className="border p-2">{item.description}</td>
      <td className="border p-2">
        {item.balances.length > 0
          ? `${item.balances[0].amount} ${item.balances[0].currency}`
          : 'N/A'}
      </td>
    </tr>
  ))
  
  return (
    <div>
      <Meta title='Profile' />
      <h1 className="text-3xl font-bold underline">Profile</h1>
      My Profile Page
      <div>
      <table className="border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Wallet ID</th>
            <th className="border p-2">Entity ID</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Balances</th>
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

  const res = await fetch('https://api-sandbox.circle.com/v1/wallets', options);
  const circle_data = await res.json();

  return {
    props: {
      circle_data,
    }
  }
}