export default function Card({ title, anio, image }) {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card shadow rounded-5 h-100">
                <img 
                    src={image} 
                    className="card-img-top img-fluid" 
                    alt={title} 
                    style={{ height: '200px', objectFit: 'cover' }} 
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{anio}</p>
                </div>
            </div>
        </div>
    );
}
