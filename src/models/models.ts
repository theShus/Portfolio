export interface PortfolioItem {
  title: string;        // Title of the portfolio item
  imageUrl: string;     // URL of the image
  altText: string;      // Alt text for the image
  categories: string[]; // List of categories the item belongs to
  linkUrl: string;      // URL for the lightbox or external link
  linkType: string;     // Type of the link (e.g., lightbox, external, etc.)
  categoryLabel: string; // Display name for the category
}
