import qrcode

# URL to generate QR code for
url = "https://meet-ebowwa.ebowwa.repl.co/"

# Generate the QR code
qr = qrcode.QRCode(version=1, box_size=10, border=4)
qr.add_data(url)
qr.make(fit=True)

# Create an image from the QR code
qr_image = qr.make_image(fill_color="black", back_color="white")

# Save the image
qr_image.save("qr_code.png")
