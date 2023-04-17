import Meta from '../components/Meta'

export default function Home() {
  return (
    <div>
      <Meta title='Profile' />
      <h1 className="text-3xl font-bold underline">Profile</h1>
      My Profile Page
      <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">35</td>
            <td className="border px-4 py-2">New York</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane Doe</td>
            <td className="border px-4 py-2">28</td>
            <td className="border px-4 py-2">Los Angeles</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Bob Smith</td>
            <td className="border px-4 py-2">42</td>
            <td className="border px-4 py-2">Chicago</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    
  )
}
