import { useState, useEffect } from 'react';
import { fetchUrl } from './fetchUrl';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';
import ErrorMesage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import toast, { Toaster } from 'react-hot-toast';
import ImageModal from '../ImageModal/ImageModal';
import { ApiResponse, Collection } from '../../types';

function App() {
	const [query, setQuery] = useState<string>('');
	const [collection, setCollection] = useState<Collection[]>([]);
	const [page, setPage] = useState<number>(1);
	const [loader, setLoader] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [isOpen, setisOpen] = useState<boolean>(false);
	const [imageInfo, setimageInfo] = useState<string>('');

	useEffect(() => {
		const request = async (): Promise<void> => {
			try {
				setError(false);
				setLoader(true);
				const result = await fetchUrl<ApiResponse>(query, page);

				if (page > result.total_pages && collection.length > 1) {
					toast.error('Sorry, it is last page');
				}
				result.results.length !== 0
					? setCollection(prevCollection => [
							...prevCollection,
							...result.results,
					  ])
					: toast.error('Nothing to this query not finded, sorry', {
							position: 'top-right',
					  });
			} catch (error) {
				setError(true);
			} finally {
				setLoader(false);
			}
		};

		if (query !== '') request();
	}, [query, page]);

	const openModal = (url: string): void => {
		setisOpen(true);
		setimageInfo(url);
	};

	const closeModal = (): void => {
		setisOpen(false);
		setimageInfo('');
	};

	const onSubmit = (value: string): void => {
		setCollection([]);
		setPage(1);
		setQuery(value);
	};

	const onLoadMore = (): void => setPage(page + 1);

	return (
		<>
			<SearchBar onSubmit={onSubmit} />
			<ImageGallery gallery={collection} onClickFoo={openModal} />
			<ImageModal
				closeModal={closeModal}
				imageInfo={imageInfo}
				isOpen={isOpen}
			/>
			{loader && <Loader />}
			{error && <ErrorMesage />}
			{collection.length > 0 && <LoadMoreBtn clickBtn={onLoadMore} />}
		</>
	);
}

export default App;
