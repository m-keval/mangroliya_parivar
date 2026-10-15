import type { Metadata } from "next";
import { PageHero, PageSection } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "ગોપનીયતા નીતિ — Privacy Policy",
  description: "Privacy policy for the Samast Mangroliya Parivar directory and applications.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="ગોપનીયતા નીતિ (Privacy Policy)"
        crumbs={[{ label: "ગોપનીયતા નીતિ" }]}
      />
      <PageSection>
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-ink/80">
          <p>
            <strong>સમસ્ત માંગરોળીયા પરિવાર</strong> ("અમે", "અમારું") તમારા વ્યક્તિગત ડેટાની ગોપનીયતા જાળવવા માટે કટિબદ્ધ છે. આ ગોપનીયતા નીતિ (Privacy Policy) જણાવે છે કે અમે અમારી વેબસાઇટ અને મોબાઇલ એપ્લિકેશન (App Store અને Play Store) દ્વારા તમારી માહિતી કેવી રીતે એકત્રિત કરીએ છીએ, તેનો ઉપયોગ કેવી રીતે કરીએ છીએ અને તેનું રક્ષણ કેવી રીતે કરીએ છીએ.
          </p>
          
          <div>
            <h3 className="mb-3 font-display text-xl font-semibold text-ink">૧. માહિતી એકત્રીકરણ (Information Collection)</h3>
            <p>
              અમે ફક્ત અમારા પરિવારની ડિરેક્ટરી અને સંચાર હેતુઓ માટે જરૂરી માહિતી જ એકત્રિત કરીએ છીએ. આમાં તમારું નામ, સરનામું, ફોન નંબર, ઇમેઇલ, અને પરિવારના અન્ય મૂળભૂત ડેટાનો સમાવેશ થાય છે.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-display text-xl font-semibold text-ink">૨. માહિતીનો ઉપયોગ (Use of Information)</h3>
            <p>
              એકત્રિત કરવામાં આવેલ ડેટાનો ઉપયોગ ફક્ત નીચેના હેતુઓ માટે જ કરવામાં આવે છે:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>પરિવારની ઓનલાઇન અને પ્રિન્ટેડ ડિરેક્ટરી જાળવવા.</li>
              <li>ઇવેન્ટ્સ, મીટિંગ્સ અને અગત્યની જાહેરાતો માટે સંપર્ક કરવા.</li>
              <li>ટ્રસ્ટ અને સ્કોલરશિપ સંબંધિત માહિતી પ્રદાન કરવા.</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-display text-xl font-semibold text-ink">૩. ડેટા શેરિંગ (Data Sharing)</h3>
            <p>
              તમારો ડેટા સંપૂર્ણપણે <strong>ખાનગી</strong> રાખવામાં આવે છે. અમે તમારી કોઈપણ વ્યક્તિગત માહિતી કોઈપણ તૃતીય પક્ષ (Third parties) કે માર્કેટિંગ એજન્સીઓ સાથે ક્યારેય શેર કરતા નથી કે વેચતા નથી.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-display text-xl font-semibold text-ink">૪. ડેટા સુરક્ષા (Data Security)</h3>
            <p>
              અમે તમારા ડેટાની સુરક્ષા માટે યોગ્ય ટેકનિકલ અને વહીવટી પગલાં લઈએ છીએ. પરિવારની ડિરેક્ટરીની ઍક્સેસ ફક્ત માન્ય પરિવારના સભ્યો પૂરતી જ મર્યાદિત છે.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-display text-xl font-semibold text-ink">૫. સંપર્ક (Contact Us)</h3>
            <p>
              જો તમને આ ગોપનીયતા નીતિ વિશે કોઈ પ્રશ્નો હોય, તો કૃપા કરીને અમારો સંપર્ક કરો: <strong>parivar@mangroliya.family</strong>
            </p>
          </div>
          
          <p className="mt-8 pt-6 border-t border-ink/10 text-sm text-ink/60">
            છેલ્લો સુધારો: ઓક્ટોબર 2026
          </p>
        </div>
      </PageSection>
    </>
  );
}
