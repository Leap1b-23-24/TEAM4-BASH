import { Grid } from "@mui/material";
import { useProduct } from "../providers/ProductProvider";
import { CustomProductDisplay } from "../customs/CustomProductDisplay";

export const GridViewComp = () => {
  const { allProduct } = useProduct();
  return (
    <Grid container spacing={8}>
      {allProduct.slice(0, 12).map((product) => (
        <Grid lg={3} sm={4} xs={6} item>
          <CustomProductDisplay
            productName={product.productName}
            productImg={product.productImage}
            color={product.color}
            mainPrice={product.mainPrice}
            disPercent={product.disPercent}
          />
        </Grid>
      ))}
    </Grid>
  );
};
