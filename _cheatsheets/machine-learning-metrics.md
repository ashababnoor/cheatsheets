---
title: "ML Metrics"
category: "Math & Science"
icon: "🤖"
order: 3
---
# Machine Learning Metrics Cheatsheet

A comprehensive reference for evaluation metrics across classification, regression, clustering, ranking, and recommendation systems.

## Confusion Matrix

A confusion matrix summarizes the prediction results of a classification model.

```
                  Predicted
                  Positive    Negative
              +------------+------------+
   Actual     |            |            |
   Positive   |     TP     |     FN     |
              |            |            |
              +------------+------------+
   Actual     |            |            |
   Negative   |     FP     |     TN     |
              |            |            |
              +------------+------------+
```

| Term | Meaning |
|------|---------|
| **TP** (True Positive) | Correctly predicted as positive |
| **TN** (True Negative) | Correctly predicted as negative |
| **FP** (False Positive) | Incorrectly predicted as positive (Type I error) |
| **FN** (False Negative) | Incorrectly predicted as negative (Type II error) |

## Classification Metrics

### Accuracy

- **Formula**: $$ \frac{TP + TN}{TP + TN + FP + FN} $$
- **Description**: Proportion of correctly classified samples out of all samples.
- **Usage**: Overall model performance for balanced datasets. Misleading when classes are imbalanced.

### Precision

- **Formula**: $$ \frac{TP}{TP + FP} $$
- **Description**: Of all samples predicted positive, how many are actually positive.
- **Usage**: Emphasizes minimizing false positives. Use when the cost of a false positive is high (e.g., spam filtering).

### Recall (Sensitivity / True Positive Rate)

- **Formula**: $$ \frac{TP}{TP + FN} $$
- **Description**: Of all actual positives, how many were correctly predicted.
- **Usage**: Emphasizes minimizing false negatives. Use when the cost of missing a positive is high (e.g., disease detection).

### Specificity (True Negative Rate)

- **Formula**: $$ \frac{TN}{TN + FP} $$
- **Description**: Of all actual negatives, how many were correctly predicted.
- **Usage**: Important when false positives are costly. Complementary to recall.

### F1 Score

- **Formula**: $$ 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}} $$
- **Description**: Harmonic mean of precision and recall.
- **Usage**: Balanced metric when you need a single number that accounts for both false positives and false negatives.

### F-beta Score

- **Formula**: $$ (1 + \beta^2) \times \frac{\text{Precision} \times \text{Recall}}{(\beta^2 \times \text{Precision}) + \text{Recall}} $$
- **Description**: Weighted harmonic mean. Beta controls the trade-off: beta < 1 favors precision, beta > 1 favors recall.
- **Usage**: F0.5 when false positives are more costly; F2 when false negatives are more costly.

### ROC-AUC (Receiver Operating Characteristic - Area Under Curve)

- **Description**: Plots True Positive Rate (Recall) vs. False Positive Rate (1 - Specificity) at various classification thresholds. AUC measures the entire area under this curve.
- **Range**: 0.0 to 1.0. A value of 0.5 indicates random guessing; 1.0 indicates perfect classification.
- **Usage**: Evaluates model's ability to distinguish between classes across all thresholds. Works well for balanced datasets but can be overly optimistic on imbalanced data.

### PR-AUC (Precision-Recall Area Under Curve)

- **Description**: Plots Precision vs. Recall at various thresholds. AUC measures the area under this curve.
- **Usage**: Preferred over ROC-AUC for imbalanced datasets because it focuses on the performance of the positive (minority) class.

### Log Loss (Binary Cross-Entropy)

- **Formula**: $$ -\frac{1}{n} \sum_{i=1}^{n} \left[ y_i \log(\hat{p}_i) + (1 - y_i) \log(1 - \hat{p}_i) \right] $$
- **Description**: Measures the performance of a model whose output is a probability between 0 and 1. Penalizes confident wrong predictions heavily.
- **Usage**: Evaluates probabilistic classifiers. Lower is better; 0 is perfect.

### Matthews Correlation Coefficient (MCC)

- **Formula**: $$ \frac{TP \times TN - FP \times FN}{\sqrt{(TP+FP)(TP+FN)(TN+FP)(TN+FN)}} $$
- **Range**: -1 to +1. +1 is perfect, 0 is random, -1 is total disagreement.
- **Description**: A balanced measure that accounts for all four quadrants of the confusion matrix.
- **Usage**: Considered one of the most reliable single-number metrics, especially for imbalanced datasets.

### Cohen's Kappa

- **Formula**: $$ \kappa = \frac{p_o - p_e}{1 - p_e} $$
  where $$p_o$$ is observed agreement (accuracy) and $$p_e$$ is expected agreement by chance.
- **Range**: -1 to +1. Values above 0.8 generally indicate strong agreement.
- **Description**: Measures agreement between predicted and actual labels, adjusted for chance.
- **Usage**: Useful when classes are imbalanced, as it accounts for the possibility of correct predictions by random chance.

## Regression Metrics

### Mean Absolute Error (MAE)

- **Formula**: $$ \frac{1}{n} \sum_{i=1}^{n} \lvert y_i - \hat{y}_i \rvert $$
- **Description**: Average of absolute differences between predicted and actual values.
- **Usage**: Measures average prediction error in original units. Robust to outliers compared to MSE.

### Mean Squared Error (MSE)

- **Formula**: $$ \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 $$
- **Description**: Average of squared differences between predicted and actual values.
- **Usage**: Penalizes larger errors more heavily than MAE. Sensitive to outliers.

### Root Mean Squared Error (RMSE)

- **Formula**: $$ \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2} $$
- **Description**: Square root of MSE, providing error in original units.
- **Usage**: More interpretable than MSE while still penalizing large errors.

### Mean Absolute Percentage Error (MAPE)

- **Formula**: $$ \frac{100\%}{n} \sum_{i=1}^{n} \left\lvert \frac{y_i - \hat{y}_i}{y_i} \right\rvert $$
- **Description**: Average absolute percentage difference between predicted and actual values.
- **Usage**: Scale-independent metric, easy to interpret as a percentage. Undefined when actual values are zero.

### R-squared (Coefficient of Determination)

- **Formula**: $$ R^2 = 1 - \frac{\sum_{i=1}^{n} (y_i - \hat{y}_i)^2}{\sum_{i=1}^{n} (y_i - \bar{y})^2} $$
- **Range**: Can be negative (worse than mean), 0 (same as predicting the mean), or up to 1 (perfect fit).
- **Description**: Proportion of variance in the dependent variable explained by the model.
- **Usage**: Standard goodness-of-fit measure. Does not penalize for model complexity.

### Adjusted R-squared

- **Formula**: $$ R^2_{adj} = 1 - \frac{(1 - R^2)(n - 1)}{n - p - 1} $$
  where $$n$$ is the number of samples and $$p$$ is the number of predictors.
- **Description**: Modified R-squared that adjusts for the number of predictors in the model.
- **Usage**: Preferred over R-squared when comparing models with different numbers of features. Penalizes adding features that do not improve the model.

## Clustering Metrics

### Silhouette Score

- **Range**: -1 to +1. Higher is better.
- **Description**: Measures how similar an object is to its own cluster compared to other clusters.
- **Usage**: Determines the optimal number of clusters. Values near 0 indicate overlapping clusters.

### Davies-Bouldin Index

- **Range**: 0 to infinity. Lower is better.
- **Description**: Evaluates cluster separation and compactness by computing the average similarity between each cluster and its most similar cluster.
- **Usage**: Lower values indicate better clustering with more distinct, compact clusters.

### Adjusted Rand Index (ARI)

- **Range**: -1 to +1. 1 is perfect agreement, 0 is random.
- **Description**: Measures similarity between two clusterings, adjusted for chance.
- **Usage**: Comparing clustering results against ground truth labels.

## Ranking & Recommendation Metrics

### Precision at K

- **Description**: Fraction of recommended items in top-K that are relevant.
- **Usage**: Measures relevancy of recommendations at a specific cutoff.

### Recall at K

- **Description**: Fraction of all relevant items that appear in the top-K recommendations.
- **Usage**: Measures coverage of relevant items at a specific cutoff.

### NDCG (Normalized Discounted Cumulative Gain)

- **Formula**: $$ \text{NDCG@K} = \frac{\text{DCG@K}}{\text{IDCG@K}} \quad \text{where} \quad \text{DCG@K} = \sum_{i=1}^{K} \frac{2^{rel_i} - 1}{\log_2(i + 1)} $$
- **Range**: 0 to 1. Higher is better.
- **Description**: Measures ranking quality by considering both the relevance of items and their position in the ranked list. Items ranked higher contribute more to the score.
- **Usage**: Standard metric for search engines and recommendation systems where ranking order matters.

### Mean Reciprocal Rank (MRR)

- **Formula**: $$ \text{MRR} = \frac{1}{n} \sum_{i=1}^{n} \frac{1}{\text{rank}_i} $$
- **Description**: Average of the reciprocal of the rank of the first relevant item across queries.
- **Usage**: Evaluates how early the first relevant result appears.

### MAP (Mean Average Precision)

- **Description**: Mean of the average precision scores across all queries. Average precision is the area under the precision-recall curve for a single query.
- **Usage**: Standard metric for information retrieval and object detection.

## Which Metric to Use

A decision guide for choosing the right metric based on your problem.

### Classification

| Scenario | Recommended Metric(s) | Reason |
|----------|----------------------|--------|
| Balanced classes | Accuracy, F1 Score | Both classes equally important |
| Imbalanced classes | F1 Score, PR-AUC, MCC | Accuracy is misleading; these focus on minority class |
| Cost of false positives is high | Precision, F0.5 | Minimizes false alarms (e.g., spam filter) |
| Cost of false negatives is high | Recall, F2 | Minimizes missed positives (e.g., cancer detection) |
| Need probabilistic output evaluation | Log Loss, Brier Score | Evaluates calibration of predicted probabilities |
| Comparing models across thresholds | ROC-AUC (balanced), PR-AUC (imbalanced) | Threshold-independent evaluation |
| Multi-class problems | Macro/Weighted F1, Cohen's Kappa | Accounts for performance across all classes |

### Regression

| Scenario | Recommended Metric(s) | Reason |
|----------|----------------------|--------|
| General purpose | RMSE | Penalizes large errors, in original units |
| Robust to outliers | MAE | Equal weight to all errors |
| Comparing across scales | MAPE, R-squared | Scale-independent interpretation |
| Feature selection / model comparison | Adjusted R-squared | Penalizes unnecessary complexity |
| MAE vs RMSE trade-off | Use both | MAE for median-like error, RMSE for mean-like error. If RMSE >> MAE, large errors are present |

### Ranking & Retrieval

| Scenario | Recommended Metric(s) | Reason |
|----------|----------------------|--------|
| Order of results matters | NDCG | Accounts for position and relevance |
| Finding first relevant result | MRR | Rewards early relevant results |
| Overall retrieval quality | MAP | Comprehensive precision-recall summary |
| Fixed recommendation list size | Precision@K, Recall@K | Evaluates a specific cutoff |
