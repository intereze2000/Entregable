import {useState} from 'react';
import { ProductFormUI } from '../ProductFormUI/ProductFormUI';
import { validateProducts } from '../../../utils/validateProducts';
import { uploadImage } from '../../../services/uploadImage';
import { createProduct } from '../../../services/products';


export const ProductFormContainer = () => {
    const [loading, setLoading] = useState();
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        type: '',
        image: null,
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        // Map product fields to validation helper expectations
        const productForValidation = {
            nombre: product.name || '',
            precio: product.price || '',
            descripcion: product.description || '',
            tipo: product.type || '',
            // prefer the currently selected file if present
            imagen: file || product.image || null,
        };

        const newErrors = validateProducts(productForValidation, true);

        if (Object.keys(newErrors).length !== 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            const imageUrl = await uploadImage(file);
            const productData = {
                nombre: product.name,
                descripcion: product.description,
                tipo: product.type,
                precio: Number(product.price),
                imagen: imageUrl,
            };

            await createProduct(productData);
            alert('Producto creado con éxito');

            setProduct({ name: '', description: '', price: '', type: '', image: null });
            setFile(null);
        }
        catch (error) {
            setErrors({ general: error.message });
        } finally {
            setLoading(false);
        }

    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    }

    const handleFileChange = (file) => {
        setFile(file);
        setProduct((prevProduct) => ({ ...prevProduct, image: file }));
    }

    return <ProductFormUI product={product} errors={errors} onChange={handleChange} onFileChange={handleFileChange} loading={loading} onSubmit={handleSubmit} />
}