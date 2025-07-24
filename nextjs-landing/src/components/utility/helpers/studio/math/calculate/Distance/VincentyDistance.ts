// helpers/calculateVincentyDistance.ts
export function calculateVincentyDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const a = 6378137; // WGS-84 ellipsoid radius
    const b = 6356752.314245; // WGS-84 ellipsoid semi-minor axis
    const f = (a - b) / a; // flattening

    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const L = Δλ;
    const U1 = Math.atan((1 - f) * Math.tan(φ1));
    const U2 = Math.atan((1 - f) * Math.tan(φ2));
    const sinU1 = Math.sin(U1);
    const cosU1 = Math.cos(U1);
    const sinU2 = Math.sin(U2);
    const cosU2 = Math.cos(U2);

    let λ = L;
    let iterations = 0;
    let σ, sinσ, cosσ, Δσ, cos2σm, cos2σmSq, sinα, cosα;

    do {
        const sinλ = Math.sin(λ);
        const cosλ = Math.cos(λ);
        sinσ = Math.sqrt(
            (cosU2 * sinλ) * (cosU2 * sinλ) +
            (cosU1 * sinU2 - sinU1 * cosU2 * cosλ) *
            (cosU1 * sinU2 - sinU1 * cosU2 * cosλ)
        );
        if (sinσ === 0) {
            return 0; // coincident points
        }
        cosσ = sinU1 * sinU2 + cosU1 * cosU2 * cosλ;
        σ = Math.atan2(sinσ, cosσ);
        sinα = cosU1 * cosU2 * sinλ / sinσ;
        cosα = Math.sqrt(1 - sinα * sinα);
        cos2σm = cosσ - 2 * sinU1 * sinU2 / (cosα * cosα);
        cos2σmSq = cos2σm * cos2σm;
        Δσ =
            f / 16 *
            (4 + f * (4 - 3 * cos2σmSq)) *
            (σ - Δσ);
        λ = L + Δσ;
    } while (Math.abs(Δσ) > 1e-12 && ++iterations < 100);

    const uSq = (cosα * cosα * (a * a - b * b)) / (b * b);
    const A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
    const B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
    const Δσ2 = B * sinσ * (cos2σm + B / 4 * (cosσ * (-1 + 2 * cos2σmSq) - B / 6 * cos2σm * (-3 + 4 * sinσ * sinσ) * (-3 + 4 * cos2σmSq)));
    const s = b * A * (σ - Δσ2);
    return s;
}