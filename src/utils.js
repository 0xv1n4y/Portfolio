//Import Images Dynamically

export const getImageUrl= (path)=>{
    return new URL(`/asscets/${path}`,import.meta.url).href
}