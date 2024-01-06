# Machine Learning Metrics Cheatsheet

This cheatsheet provides a list of useful Machine Learning metrics.

## Classification Metrics

### Accuracy

- **Formula**: $$ \frac{{TP + TN}}{{TP + TN + FP + FN}} $$
- **Description**: Proportion of correctly classified samples.
- **Usage**: Overall model performance for balanced datasets.

### Precision

- **Formula**: $$ \frac{{TP}}{{TP + FP}} $$
- **Description**: Proportion of correctly predicted positive observations among total predicted positives.
- **Usage**: Emphasizes minimizing false positives.

### Recall (Sensitivity/True Positive Rate)

- **Formula**: $$ \frac{{TP}}{{TP + FN}} $$
- **Description**: Proportion of correctly predicted positive observations among actual positives.
- **Usage**: Emphasizes minimizing false negatives.

### F1 Score

- **Formula**: $$ 2 \times \frac{{Precision \times Recall}}{{Precision + Recall}} $$
- **Description**: Harmonic mean of precision and recall.
- **Usage**: Balanced metric between precision and recall.

### ROC-AUC (Receiver Operating Characteristic - Area Under Curve)

- **Description**: Area under the ROC curve measuring model's ability to distinguish between classes.
- **Usage**: Evaluates model's performance across various thresholds.

### Confusion Matrix

- **Description**: Matrix indicating actual vs. predicted classes.
- **Usage**: Comprehensive view of model's performance.

## Regression Metrics

### Mean Absolute Error (MAE)

- **Formula**: $$ \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i| $$
- **Description**: Average of absolute differences between predicted and actual values.
- **Usage**: Measures average model prediction error.

### Mean Squared Error (MSE)

- **Formula**: $$ \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 $$
- **Description**: Average of squared differences between predicted and actual values.
- **Usage**: Penalizes larger errors more than MAE.

### Root Mean Squared Error (RMSE)

- **Formula**: $$ \sqrt{\text{MSE}} $$
- **Description**: Square root of MSE, providing error in original units.
- **Usage**: More interpretable than MSE.

## Clustering Metrics

### Silhouette Score

- **Description**: Measures how similar an object is to its own cluster compared to other clusters.
- **Usage**: Determines the optimal number of clusters.

### Davies-Bouldin Index

- **Description**: Evaluates cluster separation and compactness.
- **Usage**: Lower values indicate better clustering.

## Recommendation System Metrics

### Mean Absolute Error (MAE)

- **Description**: Average absolute difference between actual and predicted ratings.
- **Usage**: Evaluates rating prediction accuracy.

### Root Mean Squared Error (RMSE)

- **Description**: Square root of average squared differences between actual and predicted ratings.
- **Usage**: Similar to MAE for rating prediction accuracy.

### Precision at K

- **Description**: Fraction of recommended items in top-K that are relevant.
- **Usage**: Measures relevancy of recommendations.

### Recall at K

- **Description**: Fraction of relevant items found in top-K recommendations.
- **Usage**: Measures coverage of relevant items.

---

This machine learning metrics cheatsheet includes evaluation metrics for classification, regression, clustering, and recommendation systems. Each metric is accompanied by its formula, description, and typical usage scenario, providing a comprehensive reference for assessing machine learning model performance across various domains.