import Home from "../page";

async function getData(slug) {
    const res = await fetch(`${process.env.API_URL}/api/invitados/info/${slug}`, { cache: 'no-store' });
    if (!res.ok) {
        return null;
    }
    return res.json();
}

async function getCompanionData(id) {
    const res = await fetch(`${process.env.API_URL}/api/acompanantes/${id}`, { cache: 'no-store' });
    if (!res.ok) {
        return null;
    }
    return res.json();
}


export default async function Page({ params }) {
    const { slug } = params;
    const guestData = await getData(slug);
    let companionData = null;

    if (guestData && guestData.tipo === 2) {
        companionData = await getCompanionData(guestData.id_invitado);
    }

    return <Home guestData={guestData} companionData={companionData} />;
}