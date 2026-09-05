import { WHATSAPP_NUMBER } from '@/lib/whatsapp';

export const DEFAULT_BOOKING_CONFIRMATION_TEMPLATE = `
<div style="font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #0F172A; line-height: 1.6; max-width: 600px; margin: 0 auto; direction: ltr; background-color: #FFFFFF; padding: 20px;">
    <!-- Modern Header with Gold Accent -->
    <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px solid #D4AF37; padding-bottom: 20px;">
        <h1 style="color: #0F172A; margin: 0; font-size: 28px; text-transform: uppercase; letter-spacing: 2px; font-weight: 800;">Booking Confirmed</h1>
    </div>

    <!-- Greeting -->
    <div style="text-align: center; margin-bottom: 30px;">
        <p style="font-size: 18px; margin-bottom: 5px; color: #334155;">Dear <strong>{{name}}</strong>,</p>
        <p style="font-size: 16px; color: #475569;">Thank you for choosing Umrah Cabs. Your premium ride has been scheduled successfully.</p>
    </div>

    <!-- Booking Details Card -->
    <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; margin: 30px 0; box-shadow: 0 4px 6px rgba(15, 23, 42, 0.05);">
        <div style="background-color: #0F172A; padding: 16px 20px; border-bottom: 2px solid #D4AF37;">
            <h3 style="color: #FFFFFF; margin: 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; text-align: center;">Trip Details</h3>
        </div>
        
        <table style="width: 100%; border-collapse: collapse;">
            <!-- Booking Ref -->
            <tr>
                <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; width: 40%; color: #64748B;">
                    <div style="font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Reference Code</div>
                </td>
                <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; font-weight: 700; font-family: monospace; font-size: 18px; color: #D4AF37;">
                    {{booking_id}}
                </td>
            </tr>

            <!-- Date & Time -->
            <tr>
                <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; width: 40%; color: #64748B;">
                    <div style="font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Date & Time</div>
                </td>
                <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; font-weight: 700; color: #0F172A; font-size: 16px;">
                    {{date}}<br>
                    <span style="color: #475569; font-weight: 500; font-size: 14px;">{{time}}</span>
                </td>
            </tr>

            <!-- Locations -->
            <tr>
                <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; width: 40%; color: #64748B;">
                    <div style="font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">From & To</div>
                </td>
                <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-size: 15px;">
                    <div style="margin-bottom: 6px;"><span style="color: #25D366; margin-right: 8px;">●</span> <strong>{{pickup}}</strong></div>
                    <div><span style="color: #EF4444; margin-right: 8px;">●</span> <strong>{{dropoff}}</strong></div>
                </td>
            </tr>

            <!-- Vehicle -->
            <tr>
                <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; width: 40%; color: #64748B;">
                    <div style="font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Vehicle</div>
                </td>
                <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 500;">
                    {{vehicle_details}}
                </td>
            </tr>

             <!-- Passengers -->
             <tr>
                <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; width: 40%; color: #64748B;">
                    <div style="font-size: 12px; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px;">Count</div>
                </td>
                <td style="padding: 16px 20px; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-size: 15px;">
                    <strong>{{passengers}}</strong> Passengers | <strong>{{luggage}}</strong> Bags
                </td>
            </tr>

            <!-- Price -->
            {{price_row}}
        </table>
    </div>

    <!-- Need Help -->
    <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #E2E8F0;">
        <p style="color: #475569; font-size: 15px; margin-bottom: 15px;">Need to make changes? We are available 24/7.</p>
        <a href="https://wa.me/${WHATSAPP_NUMBER}" style="display: inline-block; background-color: #25D366; color: #FFFFFF; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: 700; font-size: 16px; letter-spacing: 0.5px; transition: transform 0.3s ease;">
            WhatsApp Support
        </a>
    </div>

    <p style="text-align: center; margin-top: 40px; color: #94A3B8; font-size: 13px;">
        &copy; {{year}} Umrah Cabs. All rights reserved.
    </p>
</div>
`;

export const DEFAULT_ADMIN_NOTIFICATION_TEMPLATE = `
<div style="font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #0F172A; max-width: 650px; margin: 0 auto; background-color: #FFFFFF; padding: 20px;">
    <div style="border-bottom: 3px solid #D4AF37; padding-bottom: 15px; margin-bottom: 25px;">
        <h1 style="color: #0F172A; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 1px;">New Booking Received</h1>
    </div>
    
    <div style="margin-bottom: 25px; background-color: #F8FAFC; padding: 15px; border-radius: 8px; border-left: 4px solid #D4AF37;">
        <p style="margin: 5px 0; font-size: 15px;"><strong>Booking Reference:</strong> <span style="font-family: monospace; font-size: 16px; color: #D4AF37; font-weight: bold;">{{booking_id}}</span></p>
        <p style="margin: 5px 0; font-size: 15px; color: #475569;"><strong>Submission Time:</strong> {{submission_time}}</p>
    </div>
    
    <div style="background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; overflow: hidden; margin: 20px 0;">
        <div style="background-color: #F1F5F9; padding: 12px 20px; border-bottom: 1px solid #E2E8F0;">
            <h3 style="margin: 0; font-size: 15px; color: #0F172A; text-transform: uppercase; letter-spacing: 0.5px;">Customer Details</h3>
        </div>
        <div style="padding: 20px; color: #334155; line-height: 1.6;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> {{name}}</p>
            <p style="margin: 0 0 10px 0;"><strong>Status:</strong> <span style="background-color: #FEF3C7; color: #92400E; padding: 2px 8px; border-radius: 4px; font-size: 13px; font-weight: bold;">{{status}}</span></p>
            {{phone_row}}
            {{country_row}}
            {{flight_row}}
            {{arrival_date_row}}
        </div>
    </div>

    <div style="background-color: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; overflow: hidden; margin: 20px 0;">
        <div style="background-color: #F1F5F9; padding: 12px 20px; border-bottom: 1px solid #E2E8F0;">
            <h3 style="margin: 0; font-size: 15px; color: #0F172A; text-transform: uppercase; letter-spacing: 0.5px;">Service Details</h3>
        </div>
        <div style="padding: 20px; color: #334155; line-height: 1.6;">
            <div style="margin-bottom: 10px;"><strong>Vehicle(s):</strong> <div style="margin-top: 5px;">{{vehicle_details}}</div></div>
            <p style="margin: 0 0 10px 0;"><strong>Pickup:</strong> {{pickup}}</p>
            <p style="margin: 0 0 10px 0;"><strong>Dropoff:</strong> {{dropoff}}</p>
            <p style="margin: 0 0 10px 0;"><strong>Date & Time:</strong> {{date}} at {{time}}</p>
            <p style="margin: 0 0 10px 0;"><strong>Passengers:</strong> {{passengers}} | <strong>Luggage:</strong> {{luggage}}</p>
            {{notes_row}}
            {{price_row}}
        </div>
    </div>

    <p style="font-size: 12px; color: #94A3B8; text-align: center; margin-top: 30px;">
        This is an automated notification from the Umrah Cabs booking system.
    </p>
</div>
`;

// Template variable replacer
export const replaceTemplateVariables = (template: string, variables: Record<string, string | number | undefined>) => {
    let result = template;
    for (const [key, value] of Object.entries(variables)) {
        // Replace {{key}} case-insensitive
        const regex = new RegExp(`{{${key}}}`, 'gi');
        result = result.replace(regex, value !== undefined && value !== null ? String(value) : '');
    }
    return result;
};
