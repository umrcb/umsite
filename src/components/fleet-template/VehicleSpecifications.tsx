import { VehicleData } from '@/data/vehicles';
import FadeIn from '@/components/common/FadeIn';

export default function VehicleSpecifications({ vehicle }: { vehicle: VehicleData }) {
  const specItems = [
    { label: 'Passenger Capacity', value: `${vehicle.passengers} Persons` },
    { label: 'Luggage Capacity', value: `${vehicle.luggage} Large Suitcases` },
    { label: 'Doors', value: vehicle.doors.toString() },
    { label: 'Transmission', value: vehicle.transmission },
    { label: 'Fuel Type', value: vehicle.fuel },
    { label: 'Engine', value: vehicle.engine },
    { label: 'Interior Material', value: vehicle.interior },
    { label: 'Air Conditioning', value: vehicle.airConditioning },
    { label: 'Luxury Level', value: vehicle.luxuryLevel },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container max-w-[960px] mx-auto px-4 md:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-bold font-poppins text-[#0F172A] mb-4">
              Technical Specifications
            </h2>
            <p className="text-[#475569] font-inter text-lg">
              Detailed specifications for the {vehicle.name}.
            </p>
          </div>

          <div className="bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-[#E2E8F0] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <tbody>
                {specItems.map((spec, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-[#E2E8F0] last:border-0 hover:bg-[#F8FAFC] transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]/50'}`}
                  >
                    <th className="py-5 px-6 md:px-10 text-[#475569] font-medium font-inter w-1/2 md:w-1/3 align-middle">
                      {spec.label}
                    </th>
                    <td className="py-5 px-6 md:px-10 text-[#0F172A] font-bold font-poppins align-middle">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
