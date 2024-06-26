export type Collection = {
	// [key: string]: string | number;
	urls: {
		small: string;
		regular: string;
	};
	alt_description: string;
	id: number;
};
export interface ApiResponse {
	results: Collection[];
	total: number;
	total_pages: number;
}
export interface ImageModalProps {
	isOpen: boolean;
	closeModal: () => void;
	imageInfo: string;
}
export interface ImageGalleryProps {
	gallery: Collection[];
	onClickFoo: (url: string) => void;
}
export interface ImageCardProps {
	url: string;
	alt: string;
	onClickFoo: (url: string) => void;
	bigUrl: string;
}
export interface searchBarProps {
	onSubmit: (value: string) => void;
}
export interface button {
	clickBtn: () => void;
}
