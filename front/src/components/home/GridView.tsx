import { Grid } from "@mui/material";
import { useProduct } from "../providers/ProductProvider";
import { CustomProductDisplay } from "../customs/CustomProductDisplay";
import { CustomRate } from "../customs/CustomRate";

export const GridViewComp = () => {
  const { allProduct } = useProduct();
  return (
    <Grid container spacing={2} sx={{ mt: 0 }}>
      {allProduct.slice(0, 12).map((product) => (
        <Grid lg={4} sm={6} xs={12} item>
          <CustomProductDisplay
            id={product._id}
            productName={product.productName}
            productImg={product.productImage}
            color={product.color}
            mainPrice={product.mainPrice}
            // disPercent={product.disPercent}
          />
        </Grid>
      ))}
    </Grid>
  );
};
