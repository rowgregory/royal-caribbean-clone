const TableSection = ({ cruise }: any) => {
  return (
    <table className="w-full ml-8">
      <thead>
        <tr>
          <th className="text-left font-normal text-sm">Day</th>
          <th className="text-left font-normal text-sm">Port</th>
        </tr>
      </thead>
      <tbody>
        {cruise?.countriesVisiting?.map((country: any, i: number) => (
          <tr key={i} className="h-14 py-3">
            <td className="font-light text-gray-500 text-sm">{i + 1}</td>
            <td className="font-light text-blue-900">{country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableSection;
