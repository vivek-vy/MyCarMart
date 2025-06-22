import "../styles/contact.css"

export const Banner =({bannerContent ,image})=>{

    return(
        <>
        <section className="banner position-relative">
                <div className="banner-content position-absolute ">
                  <h2 className="banner-heading fw-bold">{bannerContent}</h2>
                </div>
                <div className="banner-image">
                  <img
                    src={image}
                    alt="bg"
                    style={{ width: "100%", height: "350px", objectFit: "cover" }}
                  />
                </div>
              </section>
        </>
    )
}