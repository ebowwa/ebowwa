
**Average File Size:**
The average file size for 3D models in Three.js projects can vary significantly based on the complexity and detail of the models. From the search results, we see examples like a model being reduced from 26MB to 560KB after optimization[1]. This suggests that, while original file sizes can be quite large, effective optimization techniques can significantly reduce them to an average of a few hundred KB to a few MB.

**Maximum File Size:**
The maximum file size is often dictated by the performance constraints of the platform and the complexity of the models. For example, one of the search results mentions a model originally being 26MB[1], which is on the higher end for client-side rendering. It's generally advisable to keep 3D models under a few MBs (ideally under 5MB) to ensure they load quickly and perform well on most devices.

**Other Important Metrics:**

* **Vertices Count:** The number of vertices in a model can significantly affect performance. For instance, one of the models discussed has 4,832 vertices[1], which is considered low-poly and should perform adequately on most modern devices.
* **Texture Size:** Reducing texture size can also dramatically decrease file size. For example, reducing texture resolution from 1024x1024 to 128x128 can help reduce the model's file size significantly[3].
* **Compression Techniques:** Using tools like gltf.report to compress .glb files or converting models to use efficient formats like Draco can also help in reducing the file sizes drastically, sometimes by up to 90%[3].

**Recommendations for Optimization:**

* **Model Simplification:** Simplifying the geometry of the model without significantly impacting its visual quality can reduce both the vertex count and the file size[1].
* **Texture Optimization:** Lowering the resolution of textures and using compressed texture formats can reduce the load times and improve performance[3].
* **Use of Efficient Formats:** Formats like glTF, especially when combined with Draco compression, can offer a good balance between quality and performance[3].

In summary, while the specific numbers can vary based on the project requirements and model complexity, keeping the average model size around a few hundred KB to a few MB, with a maximum cap of around 5MB, is a good practice. Additionally, maintaining a lower vertex count and optimizing textures and materials are crucial for ensuring good performance in Three.js applications.