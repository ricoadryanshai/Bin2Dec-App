# Number Converter (Binary to Decimal Converter)

## Overview

The Binary to Decimal Converter is a straightforward project developed using React. It facilitates the conversion of binary values to their decimal counterparts. Users can input binary values of up to 8 digits, and the converter will output their equivalent decimal representation.

## Installation

To utilize this project, adhere to the following steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ricoadryanshai/Bin2Dec-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Bin2Dec-App
   ```

3. Install dependencies:

   ```bash
   npm install vite
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your web browser and go to http://localhost:5173 to access the converter.

## Usage

After launching the project, follow these steps to employ the Binary to Decimal Converter:

1. Input a binary value (up to 8 digits) in the designated field labeled "Binary Input".
2. Click the "Convert to Decimal" button.
3. The equivalent decimal value will be displayed in the "Decimal Output" field below.

## Business Logic

The Binary to Decimal Converter's core functionality resides in the useBinaryConverter hook. It offers the following functionalities:

- Binary to Decimal Conversion: Converts binary values to their decimal equivalents.
- Input Validation: Ensures the input adheres to valid binary format (up to 8 digits).
- State Management: Manages binary and decimal values' states using React's useState hook.

## Presentational Component

The primary presentational component, Main, renders the converter's user interface. It comprises the following elements:

- Form: Enables users to input binary values and showcases the corresponding decimal outputs.
- Input Fields: Contains fields for entering binary input and displaying decimal output.
- Button: Initiates the conversion process upon clicking.
- Footer: Exhibits copyright information.

## Technologies Used

The following technologies were employed in developing this project:

- React: JavaScript library for constructing user interfaces.
- CSS: Styling language utilized for designing the user interface.
- HTML: Markup language utilized for structuring the web page.

## Credits

- Author: Rico Aryan Shai
- Year: 2024
