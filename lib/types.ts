export type PropertyType = {
    propertyName: string;
    slug: string;
    nightsbridge: string;
    multiUnits: boolean;
    heroImage: string;
    imageWidth: number;
    imageHeight: number;
    guests: string;
    bedroom: string;
    bathroom: string;
    shortDesc: string;
    type: string;
    area: string;
    rates: string;
    longDesc: string;
    propImages: {
        image: string;
        alt: string;
        width: number;
        height: number;
    }[];
    moreProps?: PropertyType[]; // ✅ This makes it optional and allows nested props
};