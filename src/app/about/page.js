import Community from "@/components/about/Community";
import Mission from "@/components/about/Mission";
import OrgStructure from "@/components/about/OrgStructure";
import Section from "@/components/common/Section";

const About = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center text-gray-900 py-10">
        {/* header section  */}
        <Section>
          <div className="container px-6">
            <h1 className="text-4xl font-bold mb-2 text-center">
              About AddisFinancial
            </h1>
            <p className="mb-6 text-center">
              Bridging the financial gap between East Africa and the world.
            </p>
            <p className="text-lg mb-6">
              AddisFinancial is an innovative and forward-thinking financial
              services company inspired by the vibrant capital city of Ethiopia,
              Addis Ababa and Toronto, Canada.. The organization aims to bridge
              the financial gap between East Africa and global markets,
              particularly focusing on creating a decentralized, secure, and
              inclusive financial platform that serves both the
              Ethiopian/Eritrean diaspora and local communities. AddisFinancial
              is a movement aimed at empowering African communities through
              financial literacy, access to global financial markets, and the
              creation of a decentralized financial ecosystem that prioritizes
              security, transparency, and community involvement.
            </p>
          </div>
        </Section>
        {/* mission section  */}
        <Section>
          <Mission />
        </Section>
        {/* orgstructure section  */}
        <Section>
          <OrgStructure />
        </Section>
        {/* community section  */}
        <Section>
          <Community />
        </Section>
      </main>
    </>
  );
};

export default About;
