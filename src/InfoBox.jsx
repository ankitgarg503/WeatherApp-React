import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

export default function InfoBox({ result, cityName }) {
    return (
        <Card style={{ maxWidth: 345, margin: "auto", marginTop: "20px" }}>
            <CardMedia
                component="img"
                alt="Weather"
                height="140"
                image="th (3).jpeg"
                title="Weather"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {cityName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Temperature:</strong> {result.temp} °C <br />
                    <strong>Feels Like:</strong> {result.feelsLike} °C <br />
                    <strong>Min Temperature:</strong> {result.tempMin} °C <br />
                    <strong>Max Temperature:</strong> {result.tempMax} °C <br />
                    <strong>Humidity:</strong> {result.humidity} % <br />
                    <strong>Weather:</strong> {result.weather} <br />
                </Typography>
            </CardContent>
        </Card>
    );
}
