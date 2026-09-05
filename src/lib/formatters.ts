export function formatBookingReference(objectId: string | null | undefined): string {
    if (!objectId) return '#UMR-UNKNOWN';
    return `#UMR-${objectId.toString().slice(-8).toUpperCase()}`;
}
